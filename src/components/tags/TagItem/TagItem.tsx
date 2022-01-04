import { useDataContext } from '@lib/contexts/data/dataContext';
import { TagEditBody } from '@lib/domain/Tags';
import React, { FunctionComponent, useState } from 'react';
import { MdFilterList, MdOutlineEditNote } from 'react-icons/md';
import { toast } from 'react-toastify';

import EditTagDialog from '../EditTagDialog';
import { TagItemProps } from './TagItem.models';
import { TagItemAction, TagItemContainer } from './TagItem.styles';

/** Simple pill shaped container which holds the value of a tag */
const TagItem: FunctionComponent<TagItemProps> = ({
  noBottomMargin = false,
  showActions = false,
  refetchTags,
  loadingEditTag,
  editTag,
  tag,
}) => {
  const [tagEditDialogOpen, setTagEditDialogOpen] = useState(false);

  const { refetchAllTodos } = useDataContext();

  const editTagHandler = async (id: string, tag: TagEditBody) => {
    try {
      await editTag?.(id, tag);
      await refetchTags?.();
      await refetchAllTodos?.();
      toast.success('Tag changed successfully');
      setTagEditDialogOpen(false);
    } catch {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <>
      <TagItemContainer {...{ noBottomMargin }}>
        #{tag.title}
        {showActions && (
          <>
            <TagItemAction>
              <MdFilterList size={15} color="white" />
            </TagItemAction>

            <TagItemAction onClick={() => setTagEditDialogOpen(true)}>
              <MdOutlineEditNote size={15} color="white" />
            </TagItemAction>
          </>
        )}
      </TagItemContainer>

      <EditTagDialog
        tag={tag}
        editTag={editTagHandler}
        loading={loadingEditTag}
        open={tagEditDialogOpen}
        onClose={() => setTagEditDialogOpen(false)}
      />
    </>
  );
};

export default TagItem;

/* eslint-disable indent */
import { useDataContext } from '@lib/contexts/data';
import { TagEditBody, useDeleteTag } from '@lib/domain/Tags';
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
  loadingEditTag,
  editTag,
  tag,
}) => {
  const [tagEditDialogOpen, setTagEditDialogOpen] = useState(false);
  const {
    refetchAllTodos,
    refetchAllTags,
    currentFilter,
    setCurrentFilter,
  } = useDataContext();
  const { deleteTag } = useDeleteTag();

  const filterApplied = currentFilter?.filterString === tag?.id;

  const editTagHandler = async (id: string, tag: TagEditBody) => {
    try {
      await editTag?.(id, tag);
      await refetchAllTags?.();
      await refetchAllTodos?.();
      toast.success('Tag changed successfully');
      setTagEditDialogOpen(false);
    } catch {
      toast.error('Something went wrong, please try again');
    }
  };

  const deleteTagHandler = async (id: string) => {
    try {
      await deleteTag?.(id);
      await refetchAllTags?.();
      toast.success('Tag deleted successfully');
      setTagEditDialogOpen(false);
    } catch {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <>
      <TagItemContainer {...{ noBottomMargin, filterApplied, showActions }}>
        #{tag.title}
        {showActions && (
          <>
            <TagItemAction
              onClick={() => {
                filterApplied
                  ? setCurrentFilter?.(
                      undefined,
                      currentFilter?.includeCompleted
                    )
                  : setCurrentFilter?.(tag.id, currentFilter?.includeCompleted);
              }}
            >
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
        deleteTag={deleteTagHandler}
      />
    </>
  );
};

export default TagItem;

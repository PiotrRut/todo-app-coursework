import PillButton from '@components/buttons/PillButton';
import { H2 } from '@components/Text';
import { useDataContext } from '@lib/contexts/data';
import { useCreateTag, useEditTag } from '@lib/domain/Tags';
import React, { FunctionComponent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import CreateTagDialog from '../CreateTagDialog';
import TagItem from '../TagItem';
import { TagsContainer } from './TagsList.styles';

/**
 * This component holds the entirety of the tags list, which lives on the dashboard.
 *
 * All fetching logic lives here, and all hooks functions are derived from this component
 * and passed on to their children. It also controls local state of the dialogs for tag management.
 */
const TagsList: FunctionComponent = () => {
  const { newTag, loading } = useCreateTag();
  const { editTag, loadingEditTag } = useEditTag();
  const [tagDialogOpen, setTagDialogOpen] = useState(false);
  const { allTags } = useDataContext();

  return (
    <>
      <H2 marginBottom={20}>
        All tags <span>🔖</span>
      </H2>
      <TagsContainer>
        {allTags?.map((tag) => {
          return <TagItem {...{ editTag, loadingEditTag, tag }} showActions />;
        })}
        <PillButton
          name="new-tag"
          onClick={() => {
            setTagDialogOpen(true);
          }}
        >
          <AiOutlinePlus />
          New tag
        </PillButton>
      </TagsContainer>
      <CreateTagDialog
        newTag={newTag}
        loading={loading}
        open={tagDialogOpen}
        onClose={() => {
          setTagDialogOpen(false);
        }}
      />
    </>
  );
};

export default TagsList;

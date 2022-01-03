import PillButton from '@components/buttons/PillButton';
import { H2 } from '@components/Text';
import { useCreateTag, useGetAllTags } from '@lib/domain/Tags';
import React, { FunctionComponent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import CreateTagDialog from '../CreateTagDialog';
import TagItem from '../TagItem';
import { TagsContainer } from './TagsList.styles';

const TagsList: FunctionComponent = () => {
  const { tags, refetchTags } = useGetAllTags();

  const { newTag, loading } = useCreateTag();

  const [tagDialogOpen, setTagDialogOpen] = useState(false);

  return (
    <>
      <H2 marginBottom={20}>
        All tags <span>🔖</span>
      </H2>
      <TagsContainer>
        {tags?.map((tag) => {
          return <TagItem>{tag.title}</TagItem>;
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
        refetchTags={refetchTags}
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

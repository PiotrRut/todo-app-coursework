import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';

import { NewTagRequestBody, Tag, TagEditBody } from '.';

/**
 * This hook is used to create new tags
 * @returns A function which takes a title and description for a tag
 */
export const useCreateTag = () => {
  const [{ loading, error }, createTag] = useAxios<Tag[], NewTagRequestBody>(
    {
      url: ApiRoutes.CreateTag,
      method: 'POST',
    },
    {
      manual: true,
    }
  );

  /** Creation of a new tag */
  const newTag = async (title: string, description?: string) => {
    try {
      await createTag({
        data: {
          title,
          description,
        },
      });
      toast.success(`Tag "${title.toLocaleLowerCase()}" created successfully`);
    } catch {
      toast.error('Could not create tag, please try again');
    }
  };

  return { loading, error, newTag };
};

/**
 * This hook is used to edit existing tags
 * @returns A function which takes a title and description for a tag
 */
export const useEditTag = () => {
  const [{ loading, error }, edit] = useAxios<Tag[], TagEditBody>(
    {
      url: ApiRoutes.UpdateTag,
      method: 'PATCH',
    },
    {
      manual: true,
    }
  );

  const editTag = async (id: string, tag: TagEditBody) => {
    await edit({
      params: {
        id,
      },
      data: tag,
    });
  };

  return { editTag, loadingEditTag: loading, error };
};

/** Hook used for deleting tags */
export const useDeleteTag = () => {
  const [{ loading, error }, tagDelete] = useAxios(
    {
      url: ApiRoutes.DeleteTag,
      method: 'DELETE',
    },
    {
      manual: true,
    }
  );

  const deleteTag = async (id: string) => {
    await tagDelete({
      params: {
        id,
      },
    });
  };

  return { loading, error, deleteTag };
};

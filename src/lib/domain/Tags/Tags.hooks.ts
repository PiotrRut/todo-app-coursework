import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';

import { Tag } from '.';

export const useCreateTag = () => {
  const [{ loading, error }, createTag] = useAxios<Tag[]>(
    {
      url: ApiRoutes.CreateTag,
      method: 'POST',
    },
    {
      manual: true,
    }
  );

  const newTag = async (title: string, description: string) => {
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
 * This hook is used to fetch and return the list of tags from the DB,
 * as well as loading and error states for the request.
 */
export const useGetAllTags = () => {
  const [{ data, loading, error }, refetchTags] = useAxios<Tag[]>(
    ApiRoutes.GetTags
  );

  return { tags: data, loading, error, refetchTags };
};

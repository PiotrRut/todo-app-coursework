import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';

import { NewTagRequestBody, Tag } from '.';

/**
 * This hook is used to create new tags
 * @returns newTag A function which takes a title and description for a tag
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
 * @returns tags An array of all tags
 * @returns loading A boolean indicating if the request is loading
 * @returns error A boolean indicating if there was an error
 * @returns searchTags A function which will refetch the list of tags
 */
export const useGetAllTags = () => {
  const [{ data, loading, error }, refetchTags] = useAxios<Tag[]>(
    ApiRoutes.GetTags
  );

  return { tags: data, loading, error, refetchTags };
};

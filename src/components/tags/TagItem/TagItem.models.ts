import { Tag, TagEditBody } from '@lib/domain/Tags';

export interface TagItemProps {
  noBottomMargin?: boolean;
  showActions?: boolean;
  editTag?: (id: string, tag: TagEditBody) => Promise<void>;
  refetchTags?: () => void;
  refetchTodos?: () => void;
  loadingEditTag?: boolean;
  tag: Tag;
}

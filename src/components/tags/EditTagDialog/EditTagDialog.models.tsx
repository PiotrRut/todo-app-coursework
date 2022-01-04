import { Tag, TagEditBody } from '@lib/domain/Tags';

export interface EditTagDialogProps {
  editTag?: (id: string, tag: TagEditBody) => Promise<void>;
  open: boolean;
  onClose: () => void;
  loading?: boolean;
  tag: Tag;
}

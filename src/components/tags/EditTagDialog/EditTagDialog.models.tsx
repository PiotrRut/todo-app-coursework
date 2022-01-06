import { Tag, TagEditBody } from '@lib/domain/Tags';

export interface EditTagDialogProps {
  /** Function for editing the tag */
  editTag?: (id: string, tag: TagEditBody) => Promise<void>;
  /** Function for deleting tags */
  deleteTag?: (id: string) => Promise<void>;
  /** Open state of the dialog */
  open: boolean;
  /** Function triggered when the dialog is closed */
  onClose: () => void;
  /** Loading state of the edit tag request */
  loading?: boolean;
  /** The tag object */
  tag: Tag;
}

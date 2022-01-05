export interface CreateTagDialogProps {
  /** Loading state of the request */
  loading: boolean;
  /** Function for adding a new tag */
  newTag: (title: string, description: string) => Promise<void>;
  /** Indicates whether the dialog is open */
  open: boolean;
  /** Function to pass to the close button */
  onClose: () => void;
}

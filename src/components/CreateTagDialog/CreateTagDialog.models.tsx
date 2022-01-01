export interface CreateTagDialogProps {
  /** Loading state of the request */
  loading: boolean;
  /** Method for adding a new tag */
  newTag: (title: string, description: string) => Promise<void>;
  /** Method for refetching tags */
  refetchTags: () => void;
  /** Indicates whether the dialog is open */
  open: boolean;
  /** Method to pass to the close button */
  onClose: () => void;
}

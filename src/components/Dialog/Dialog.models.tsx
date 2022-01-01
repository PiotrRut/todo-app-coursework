export interface DialogProps {
  /** The open state of the dialog */
  open: boolean;
  /** The close method of the dialog */
  onClose: () => void;
}

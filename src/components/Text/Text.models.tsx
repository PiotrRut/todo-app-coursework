import { sizes } from '@theme/tokens';

export type TextVariants = 'h1' | 'h2' | 'h3' | 'p';

export interface TextProps {
  /** Variant used internally to style the Text component */
  variant?: TextVariants;
  /** Optional margin to apply at the bottom of the text */
  marginBottom?: keyof typeof sizes;
  /** Maps a styled typography component to a different semantic element.
   *
   * @example <H1 renderAs="h2" /> // will render an `h2` tag with the styles of `h1`
   */
  renderAs?: TextVariants;
  /** Font weight of the text */
  weight?: 'bold' | 'normal';
  /** Optional colour */
  color?: 'default' | 'gray';
  children: React.ReactNode;
}

export type User = {
  /** User's name */
  name: string;
  /** User's email address */
  email: string;
};

export interface AppContextValues {
  /** Currently logged in user's ID token, user for authentication */
  userIdToken?: string;
  /** Setter for the currently logged in user's ID token */
  setUserIdToken: (newValue: string) => void;
  /** User of the app */
  user?: User;
  /** Defines whether the app is ready and all data has been fetched and stored */
  isAppReady?: boolean;
}

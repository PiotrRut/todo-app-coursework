export type Tag = {
  /** Id of the tag (in uuid format) */
  id: string;
  /** Title of the tag */
  title: string;
  /** Optional description */
  description?: string;
};

export type NewTagRequestBody = Omit<Tag, 'id'>;

import React, { FunctionComponent } from 'react';

import { TagItemContainer } from './TagItem.styles';

/** Simple pill shaped container which holds the value of a tag */
const TagItem: FunctionComponent = ({ children }) => {
  return <TagItemContainer>#{children}</TagItemContainer>;
};

export default TagItem;

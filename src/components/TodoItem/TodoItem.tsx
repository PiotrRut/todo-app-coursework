import { H3, P } from '@components/Text';
import dayjs from 'dayjs';
import React, { FunctionComponent } from 'react';

import { TodoItemProps } from './TodoItem.models';
import { FlexRow, TagContainer, TodoItemContainer } from './TodoItem.styles';

const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
  const {
    item: { title, body, id, tag, isCompleted, completeDate },
  } = props;

  return (
    <TodoItemContainer key={id}>
      <FlexRow>
        <H3 renderAs="p" marginBottom={20}>
          {title}
        </H3>
        {completeDate && (
          <H3 renderAs="p" marginBottom={20}>
            {dayjs(completeDate).format('D/M/YY')}
          </H3>
        )}
      </FlexRow>
      {body && (
        <P color="gray" marginBottom={20}>
          {body}
        </P>
      )}
      <FlexRow>
        {tag && <TagContainer>#{tag.title}</TagContainer>}
        <P>Status - {isCompleted ? <span>✅</span> : <span>🙅🏼‍♂️</span>}</P>
      </FlexRow>
    </TodoItemContainer>
  );
};

export default TodoItem;

import EditTodoDialog from '@components/EditTodoDialog';
import TagItem from '@components/TagItem';
import { H3, P } from '@components/Text';
import { Todo } from '@lib/domain/Todos';
import dayjs from 'dayjs';
import React, { FunctionComponent, useState } from 'react';
import { MdCheckCircle, MdOutlineEditNote } from 'react-icons/md';
import { toast } from 'react-toastify';

import { TodoItemProps } from './TodoItem.models';
import { ClearButton, FlexRow, TodoItemContainer } from './TodoItem.styles';

const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
  const { item, completedAction, changeToDoDetails } = props;

  const { title, body, id, tag, isCompleted, completeDate } = item;

  const [todoDialogOpen, setTodoDialogOpen] = useState(false);

  const handleMarkCompleted = async () => {
    try {
      await completedAction(id, true);
      toast.success(`"${title}" has been marked as completed`);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  const handleMarkUnCompleted = async () => {
    try {
      await completedAction(id, false);
      toast.success(`"${title}" has been moved to to-do`);
      setTodoDialogOpen(false);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  const changeDetails = async (todo: Partial<Omit<Todo, 'isCompleted'>>) => {
    try {
      await changeToDoDetails(todo);
      setTodoDialogOpen(false);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  return (
    <>
      <TodoItemContainer key={id} isCompleted={isCompleted}>
        <FlexRow>
          <H3 renderAs="p" marginBottom={20}>
            {title}
          </H3>
        </FlexRow>
        {body && (
          <P color="gray" marginBottom={20}>
            {body}
          </P>
        )}
        <FlexRow>
          {tag && <TagItem noBottomMargin>{tag.title}</TagItem>}
          {completeDate && (
            <H3 renderAs="p">{dayjs(completeDate).format('D/M/YY')}</H3>
          )}
          <div>
            {!isCompleted && (
              <ClearButton onClick={handleMarkCompleted} type="button">
                <MdCheckCircle size={25} color="green" />
              </ClearButton>
            )}
            <ClearButton onClick={() => setTodoDialogOpen(true)} type="button">
              <MdOutlineEditNote size={25} color="white" />
            </ClearButton>
          </div>
        </FlexRow>
      </TodoItemContainer>

      <EditTodoDialog
        open={todoDialogOpen}
        onClose={() => setTodoDialogOpen(false)}
        handleMarkUnCompleted={handleMarkUnCompleted}
        todo={item}
        editTodo={changeDetails}
        loading={false}
      />
    </>
  );
};

export default TodoItem;

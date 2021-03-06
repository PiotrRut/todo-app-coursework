import TagItem from '@components/tags/TagItem';
import { H3, P } from '@components/Text';
import { useDataContext } from '@lib/contexts/data';
import { Tag } from '@lib/domain/Tags';
import { TodoRequestBody } from '@lib/domain/Todos';
import dayjs from 'dayjs';
import React, { FunctionComponent, useState } from 'react';
import { MdCheckCircle, MdOutlineEditNote } from 'react-icons/md';
import { toast } from 'react-toastify';

import EditTodoDialog from '../EditTodoDialog';
import { TodoItemProps } from './TodoItem.models';
import { ClearButton, FlexRow, TodoItemContainer } from './TodoItem.styles';

const TodoItem: FunctionComponent<TodoItemProps> = (props) => {
  const { item, changeToDoDetails, loading, deleteTodo } = props;
  const { title, body, id, tag, isComplete, deadline } = item;

  const [todoDialogOpen, setTodoDialogOpen] = useState(false);
  const { refetchAllTodos } = useDataContext();

  const handleMarkCompleted = async () => {
    try {
      await changeToDoDetails(id, {
        title,
        body,
        tagId: tag?.id,
        isComplete: true,
        deadline,
      });
      await refetchAllTodos?.();
      toast.success(`"${title}" has been marked as completed`);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  const handleMarkUnCompleted = async () => {
    try {
      await changeToDoDetails(id, {
        title,
        body,
        tagId: tag?.id,
        isComplete: false,
        deadline,
      });
      await refetchAllTodos?.();
      toast.success(`"${title}" has been moved to to-do`);
      setTodoDialogOpen(false);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  const changeDetails = async (todo: TodoRequestBody) => {
    try {
      await changeToDoDetails(item.id, todo);
      await refetchAllTodos?.();
      setTodoDialogOpen(false);
      toast.success(`"${title}" has been updated`);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await deleteTodo(id);
      await refetchAllTodos?.();
      setTodoDialogOpen(false);
      toast.success(`"${title}" has been deleted`);
    } catch {
      toast.error(`Something went wrong, please try again`);
    }
  };

  return (
    <>
      <TodoItemContainer key={id} isCompleted={isComplete}>
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
          {tag && <TagItem tag={tag as Tag} noBottomMargin />}
          {deadline && <H3 renderAs="p">{dayjs(deadline).format('D/M/YY')}</H3>}
          <div style={{ marginLeft: 'auto' }}>
            {!isComplete && (
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
        loading={loading}
        deleteToDo={deleteTask}
      />
    </>
  );
};

export default TodoItem;

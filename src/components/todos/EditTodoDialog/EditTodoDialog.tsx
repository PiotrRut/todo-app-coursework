import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/FormTextField';
import { H2 } from '@components/Text';
import { TodoRequestBody } from '@lib/domain/Todos';
import dayjs from 'dayjs';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';

import { EditTodoDialogProps } from './EditTodoDialog.models';
import {
  ButtonRow,
  DeleteButton,
  MarkUncompletedButton,
  StyledForm,
} from './EditTodoDialog.styles';
import { validate } from './EditTodoDialog.validate';

/** Dialog for editing to-dos - wraps around the `Dialog` component */
const EditTodoDialog: FunctionComponent<EditTodoDialogProps> = (props) => {
  const {
    open,
    onClose,
    todo,
    editTodo,
    loading,
    handleMarkUnCompleted,
    deleteToDo,
  } = props;

  return (
    <Dialog {...{ open, onClose }}>
      <H2 marginBottom={25}>{todo.title}</H2>
      <Formik
        initialValues={{
          title: todo.title,
          body: todo.body,
          deadline: todo.deadline
            ? dayjs(todo.deadline).format('YYYY-MM-DD')
            : undefined,
          isComplete: todo.isComplete,
          tagId: todo.tag?.id,
        }}
        validate={validate}
        onSubmit={async (values) => {
          const cleanedUpValues = Object.fromEntries(
            Object.entries(values).filter(
              ([, v]) => v !== '' && v !== null && v !== undefined
            )
          );

          await editTodo({
            ...((cleanedUpValues as unknown) as TodoRequestBody),
            deadline: values.deadline
              ? dayjs(values.deadline).utc(true).format()
              : undefined,
          });
        }}
      >
        {({ values }) => (
          <Form>
            <StyledForm>
              <FormTextField
                name="title"
                label="Title"
                marginBottom={10}
                defaultValue={todo.title}
                required
                autoFocus
                fullWidth
              />

              <FormTextField
                name="body"
                label="Body"
                marginBottom={10}
                defaultValue={todo.body}
                fullWidth
              />

              <FormTextField
                name="deadline"
                label="Deadline (YYYY-MM-DD)"
                marginBottom={30}
                defaultValue={
                  todo.deadline
                    ? dayjs(todo.deadline).format('YYYY-MM-DD')
                    : undefined
                }
                mask="9999-99-99"
                fullWidth
              />
            </StyledForm>
            <ButtonRow>
              <DeleteButton type="button" onClick={() => deleteToDo(todo.id)}>
                Delete
              </DeleteButton>
              {todo.deadline && !todo.isComplete && (
                <MarkUncompletedButton
                  type="button"
                  onClick={() => {
                    handleMarkUnCompleted(todo.id, false);
                  }}
                >
                  Back to "to-do"
                </MarkUncompletedButton>
              )}
            </ButtonRow>
            <Button
              name="edit-todo"
              type="submit"
              loading={loading}
              disabled={!values.title}
              fullWidth
            >
              Save changes
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default EditTodoDialog;

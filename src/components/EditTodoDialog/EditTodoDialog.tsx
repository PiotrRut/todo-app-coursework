import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/FormTextField';
import { H2 } from '@components/Text';
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
  } = props;

  return (
    <Dialog {...{ open, onClose }}>
      <H2 marginBottom={25}>{todo.title}</H2>
      <Formik
        initialValues={{
          title: todo.title,
          body: todo.body,
          deadline: dayjs(todo.deadline).format('YYYY-MM-DD'),
          isCompleted: todo.deadline,
          tagId: todo.tag?.id,
        }}
        validate={validate}
        onSubmit={async ({ title, body, deadline, tagId }) => {
          await editTodo({
            title,
            body,
            deadline: deadline && dayjs(deadline).format(),
            tagId,
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
                defaultValue={dayjs(todo.deadline).format('YYYY-MM-DD')}
                mask="9999-99-99"
                fullWidth
              />
            </StyledForm>
            <ButtonRow>
              <DeleteButton type="button">Delete</DeleteButton>
              {todo.deadline && (
                <MarkUncompletedButton
                  type="button"
                  onClick={async () => {
                    handleMarkUnCompleted(todo.id, false);
                  }}
                >
                  Back to "to-do"
                </MarkUncompletedButton>
              )}
            </ButtonRow>
            <Button
              name="create-tag"
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

import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/FormTextField';
import { H2 } from '@components/Text';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { toast } from 'react-toastify';

import { NewTodoDialogProps } from './NewTodoDialog.models';
import { StyledForm } from './NewTodoDialog.styles';
import { validate } from './NewTodoDialog.validate';

const NewTodoDialog: FunctionComponent<NewTodoDialogProps> = (props) => {
  const { onClose, loading, open, createTodo } = props;

  return (
    <Dialog {...{ open, onClose }}>
      <H2 marginBottom={25}>Create a new task</H2>
      <Formik
        initialValues={{
          title: '',
          body: '',
          completeDate: '',
          isCompleted: false,
          tagId: '',
        }}
        validate={validate}
        onSubmit={async ({ title, body, completeDate, tagId }) => {
          try {
            await createTodo({
              title,
              body,
              completeDate,
              tag: {
                id: tagId,
              },
              isCompleted: false,
            });
            toast.success(`"${title}" has been created successfully`);
            onClose();
          } catch {
            toast.error('Something went wrong. Please try again later.');
          }
        }}
      >
        {({ values }) => (
          <Form>
            <StyledForm>
              <FormTextField
                name="title"
                label="Title"
                marginBottom={10}
                required
                autoFocus
                fullWidth
              />

              <FormTextField
                name="body"
                label="Body"
                marginBottom={10}
                fullWidth
              />

              <FormTextField
                name="completeDate"
                label="Deadline (YYYY-MM-DD)"
                marginBottom={30}
                mask="9999-99-99"
                fullWidth
              />
            </StyledForm>
            <Button
              name="create-todo"
              type="submit"
              loading={loading}
              disabled={!values.title}
              fullWidth
            >
              Create task
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default NewTodoDialog;

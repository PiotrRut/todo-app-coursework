import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/FormTextField';
import { H2 } from '@components/Text';
import { useDataContext } from '@lib/contexts/data';
import { TodoRequestBody } from '@lib/domain/Todos';
import dayjs from 'dayjs';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { toast } from 'react-toastify';

import { NewTodoDialogProps } from './NewTodoDialog.models';
import { StyledForm } from './NewTodoDialog.styles';
import { validate } from './NewTodoDialog.validate';

const NewTodoDialog: FunctionComponent<NewTodoDialogProps> = (props) => {
  const { onClose, loading, open, createTodo } = props;
  const { refetchAllTodos } = useDataContext();

  return (
    <Dialog {...{ open, onClose }}>
      <H2 marginBottom={25}>Create a new task</H2>
      <Formik
        initialValues={{
          title: '',
          body: '',
          deadline: '',
          tagId: '',
        }}
        validate={validate}
        onSubmit={async (values) => {
          const cleanedUpValues = Object.fromEntries(
            Object.entries(values).filter(
              ([, v]) => v !== '' && v !== null && v !== undefined
            )
          );

          try {
            await createTodo({
              ...(cleanedUpValues as TodoRequestBody),
              deadline: values.deadline
                ? dayjs(values.deadline).utc(true).format()
                : undefined,
            });
            toast.success(`"${values.title}" has been created successfully`);
            await refetchAllTodos?.();
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
                maxLength={80}
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
                name="deadline"
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

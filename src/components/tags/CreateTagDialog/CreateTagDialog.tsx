import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/FormTextField';
import { H2, P } from '@components/Text';
import { useDataContext } from '@lib/contexts/data';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';

import { CreateTagDialogProps } from './CreateTagDialog.models';
import { StyledForm } from './CreateTagDialog.styles';

/** Dialog for creating new tags - wraps around the `Dialog` component */
const CreateTagDialog: FunctionComponent<CreateTagDialogProps> = (props) => {
  const { newTag, loading, open, onClose } = props;
  const { refetchAllTodos, refetchAllTags } = useDataContext();

  return (
    <Dialog {...{ onClose, open }}>
      <H2 marginBottom={10}>Create a new tag</H2>
      <P marginBottom={20} color="gray">
        Please provide a name and an optional description for your new tag.
      </P>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={async ({ title, description }) => {
          await newTag(title, description);
          await refetchAllTodos?.();
          await refetchAllTags?.();
          onClose();
        }}
      >
        {({ values }) => (
          <Form>
            <StyledForm>
              <FormTextField
                name="title"
                label="Name"
                marginBottom={10}
                maxLength={20}
                required
                autoFocus
                fullWidth
              />

              <FormTextField
                name="description"
                label="Description"
                marginBottom={30}
                fullWidth
              />
            </StyledForm>
            <Button
              name="create-tag"
              type="submit"
              loading={loading}
              disabled={!values.title}
              fullWidth
            >
              Create tag
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default CreateTagDialog;

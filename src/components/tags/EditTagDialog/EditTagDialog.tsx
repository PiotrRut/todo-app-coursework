import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/FormTextField';
import { H2, P } from '@components/Text';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';

import { EditTagDialogProps } from './EditTagDialog.models';
import { StyledForm } from './EditTagDialog.styles';

const EditTagDialog: FunctionComponent<EditTagDialogProps> = (props) => {
  const { editTag, open, onClose, loading, tag } = props;

  return (
    <Dialog {...{ onClose, open }}>
      <H2 marginBottom={10}>Edit "#{tag.title}"</H2>
      <P marginBottom={20} color="gray">
        Please provide a name and an optional description for your the tag.
      </P>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={async (values) => {
          await editTag?.(tag.id, values);
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
              name="edit-tag"
              type="submit"
              loading={loading}
              disabled={!values.title}
              fullWidth
            >
              Edit tag
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default EditTagDialog;

import Button from '@components/buttons/Button';
import Dialog from '@components/Dialog';
import FormTextField from '@components/inputs/FormTextField';
import { H2, P } from '@components/Text';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';

import { EditTagDialogProps } from './EditTagDialog.models';
import { DeleteButton, StyledForm } from './EditTagDialog.styles';

const EditTagDialog: FunctionComponent<EditTagDialogProps> = (props) => {
  const { editTag, open, onClose, loading, tag, deleteTag } = props;

  return (
    <Dialog {...{ onClose, open }}>
      <H2 marginBottom={10}>Edit "#{tag.title}"</H2>
      <P marginBottom={20} color="gray">
        Please provide a name and an optional description for your the tag.
      </P>
      <Formik
        initialValues={{ title: tag.title, description: tag.description }}
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
                defaultValue={tag.title}
                required
                fullWidth
              />

              <FormTextField
                name="description"
                label="Description"
                marginBottom={30}
                defaultValue={tag.description}
                fullWidth
              />
            </StyledForm>

            <DeleteButton onClick={() => deleteTag?.(tag.id)} type="button">
              Delete tag
            </DeleteButton>

            <Button
              name="edit-tag"
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

export default EditTagDialog;

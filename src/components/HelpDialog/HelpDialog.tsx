import Dialog from '@components/Dialog';
import { P } from '@components/Text';
import React, { FunctionComponent } from 'react';
import { MdCheckCircle, MdFilterList, MdOutlineEditNote } from 'react-icons/md';

import { HelpDialogProps } from './HelpDialog.models';
import { IconWrapper, StyledRow } from './HelpDialog.styles';

const HelpDialog: FunctionComponent<HelpDialogProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog {...{ open, onClose }}>
      <StyledRow>
        <IconWrapper>
          <MdCheckCircle size={30} color="green" />
        </IconWrapper>
        <P>Buttons with this icon let you mark a task as "complete".</P>
      </StyledRow>
      <StyledRow>
        <IconWrapper>
          <MdOutlineEditNote size={30} color="white" />
        </IconWrapper>
        <P>Buttons with this icon you edit an item, such as a task or tag.</P>
      </StyledRow>
      <StyledRow>
        <IconWrapper>
          <MdFilterList size={30} color="white" />
        </IconWrapper>
        <P>
          Buttons with this icon let you apply the tag they're attached to as a
          filter for the to-do list. You can only apply one tag as a filter at a
          time.
        </P>
      </StyledRow>
      <P marginBottom={10}>
        To-do tasks can consist of a title, which is required, and optional
        fields such as an assigned tag, body, or deadline. They also have a
        status of completed/uncompleted.
      </P>
      <P marginBottom={10}>
        Tags consist of a required title, and an optional description.
      </P>
      <P>The character limits for titles are 80 for tasks, and 20 for tags.</P>
    </Dialog>
  );
};

export default HelpDialog;

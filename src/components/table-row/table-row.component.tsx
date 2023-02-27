import {
  Tr,
  Td,
  ButtonGroup,
  Button,
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
  Tooltip,
  Select
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { updateUser } from '../../utils/api';

export type TableRowComponentProps = {
  firstName: string;
  lastName: string;
  birthDay: string;
  company: string;
  startDate: string;
  endDate: string;
  userId: number;
};

export const TableRowComponent: FC<TableRowComponentProps> = ({
  firstName,
  lastName,
  birthDay,
  company,
  startDate,
  endDate,
  userId,
}) => {

  return (
    <Tr>
      <Td>
        <Editable defaultValue={userId.toString()}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <Editable defaultValue={firstName}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <Editable defaultValue={lastName}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <Editable defaultValue={birthDay}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <Select placeholder={company}>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Td>
      <Td>
        <Editable defaultValue={startDate}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <Editable defaultValue={endDate}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button>Salva</Button>
          <Tooltip label='Cancella utente'>
            <IconButton aria-label="Remove user" icon={<CloseIcon />} />
          </Tooltip>
        </ButtonGroup>
      </Td>
    </Tr>
  );
};

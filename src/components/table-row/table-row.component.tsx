import {
  Tr,
  Td,
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
  Select,
  ButtonGroup,
  Button,
  Input,
  NumberInputField,
  NumberInput
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { updateUser } from '../../utils/api';
import { AiFillSave } from "react-icons/ai";
import { DetailedHTMLProps, HTMLAttributes } from 'react';

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
  const [value, setValue] = useState(userId.toString())

  return (
    <Tr>
      <Td>
        <NumberInput value={value} onChange={(value) => setValue(value)} variant='unstyled'>
          <NumberInputField maxLength={5} />
        </NumberInput>
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
        <ButtonGroup size='sm' isAttached variant='outline'>
          <Button>Scheda utente</Button>
          <IconButton aria-label="Save user" icon={<AiFillSave />} />
          <IconButton aria-label="Remove user" icon={<DeleteIcon />} />
        </ButtonGroup>
      </Td>
    </Tr>
  );
};

import {
  Tr,
  Td,
  ButtonGroup,
  Button,
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FC } from 'react';

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
      <Td>{userId}</Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td>{birthDay}</Td>
      <Td>{company}</Td>
      <Td>{startDate}</Td>
      <Td>
        <Editable defaultValue={endDate}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Td>
      <Td>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button>Salva</Button>
          <IconButton aria-label="Remove user" icon={<CloseIcon />} />
        </ButtonGroup>
      </Td>
    </Tr>
  );
};

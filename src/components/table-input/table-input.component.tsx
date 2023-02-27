import { Editable, EditablePreview, EditableInput } from '@chakra-ui/editable';
import { FC } from 'react';

export type TableInputComponentProps = {
  firstName?: string;
  lastName?: string;
  birthDay?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  userId?: number;
};

export const TableInputComponent: FC<TableInputComponentProps> = ({ data }) => {
  return (
    <Editable defaultValue={data}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

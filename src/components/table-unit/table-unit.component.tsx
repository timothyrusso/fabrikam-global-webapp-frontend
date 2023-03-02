import { FC } from 'react';
import { Td } from '@chakra-ui/react';

export type TableUnitComponentProps = {
  inputValue: string | number;
  handleTableRowClick: () => void;
};

export const TableUnitComponent: FC<TableUnitComponentProps> = ({
  inputValue,
  handleTableRowClick,
}) => {
  return <Td onClick={handleTableRowClick}>{inputValue}</Td>;
};

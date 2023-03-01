import { FC } from 'react';
import { Td } from '@chakra-ui/react';

export type TableUnitComponentProps = {
  inputValue: string | number;
};

export const TableUnitComponent: FC<TableUnitComponentProps> = ({
  inputValue,
}) => {
  return <Td>{inputValue}</Td>;
};

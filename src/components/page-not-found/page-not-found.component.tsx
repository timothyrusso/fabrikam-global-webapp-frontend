import { Text } from '@chakra-ui/react';

export const PageNotFoundComponent = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="xl" color="blue.500" marginTop={60}>
        404
      </Text>
      <Text fontSize="xl" color="blue.500">
        PAGE NOT FOUND
      </Text>
    </>
  );
};

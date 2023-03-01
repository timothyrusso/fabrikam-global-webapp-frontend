import { Flex, Center, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../colorModeSwitcher/ColorModeSwitcher';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Navbar = () => {
  return (
    <Flex>
      <Center w="220px" h="30px" color="green.400" marginLeft={5}>
        <Logo />
      </Center>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" marginRight={5} />
    </Flex>
  );
};

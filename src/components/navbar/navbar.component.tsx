import { Flex, Center, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../colorModeSwitcher/ColorModeSwitcher';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex maxHeight={100}>
      <Center w="220px" h="30px" color="green.400" marginLeft={5}>
        <Logo cursor="pointer" onClick={() => navigate('/')} />
      </Center>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" marginRight={5} />
    </Flex>
  );
};

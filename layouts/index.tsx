import { Center, Container, Flex, Text, theme } from '@chakra-ui/react';

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Flex background={theme.colors.whiteAlpha[200]} h={12} w={'100%'}>
        <Center>
          <Text m={4}>Productizer</Text>
        </Center>
      </Flex>
      <Container pt={12}>{children}</Container>
    </>
  );
};

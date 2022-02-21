import { Button, Text, VStack } from "@chakra-ui/react";

export const LeftSection = () => {
  return (
    <VStack
      w="full"
      maxW="container.sm"
      h="full"
      justify="center"
      align="flex-start"
      spacing="8"
    >
      <Text fontWeight="bold" color="pink.500" fontSize="xl">
        Clientr
      </Text>

      <Text fontSize="6xl" fontWeight="bold" lineHeight="1">
        Seu sistema de gerenciamento de clientes na nuvem.
      </Text>

      <Text fontSize="lg">
        Gerencie seus clientes de uma maneira fácil, rápida e centralizada.
      </Text>

      <Button colorScheme="pink">Acessar Conta</Button>
    </VStack>
  );
};

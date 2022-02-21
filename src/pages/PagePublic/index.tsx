import { Button, Flex, Text, VStack, Image } from "@chakra-ui/react";
import React from "react";

export const PagePublic = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      bg="purple.50"
      px="8"
      fontFamily="sans-serif"
      color="pink.900"
      justify="center"
    >
      <Flex
        w="full"
        h="full"
        maxW="container.xl"
        justify="space-between"
        align="center"
      >
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

        <VStack maxW="container.sm">
          <Image objectFit="contain" src="/hero-image.svg" />
        </VStack>
      </Flex>
    </Flex>
  );
};

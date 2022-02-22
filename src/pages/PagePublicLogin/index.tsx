import React from "react";

import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";

import { TemplatePagePublic } from "../../components/Templates/TemplatePublicPage";
import { NextLink } from "../../components/Atoms/NextLink";

export const PagePublicLogin = () => {
  return (
    <TemplatePagePublic
      leftSection={
        <VStack w="full" align="flex-start" spacing="8">
          <Text fontWeight="bold" color="pink.500" fontSize="xl">
            Login
          </Text>

          <Text>Insira seu email para se conectar</Text>

          <Input bg="white" placeholder="Email" />

          <Button alignSelf="flex-end" colorScheme="pink">
            Log In
          </Button>

          <HStack w="full" justify="space-between">
            <NextLink href="/create-account" label="Criar Conta" />
            <NextLink href="/" label="Voltar" />
          </HStack>
        </VStack>
      }
    />
  );
};

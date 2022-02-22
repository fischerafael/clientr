import React from "react";

import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";

import { TemplatePagePublic } from "../../components/Templates/TemplatePublicPage";
import { NextLink } from "../../components/Atoms/NextLink";

export const PagePublicCreateAccount = () => {
  return (
    <TemplatePagePublic
      leftSection={
        <VStack w="full" align="flex-start" spacing="8">
          <Text fontWeight="bold" color="pink.500" fontSize="xl">
            Criar Conta
          </Text>

          <Text>Crie sua conta</Text>

          <Input bg="white" placeholder="Nome" />
          <Input bg="white" placeholder="Sobrenome" />
          <Input bg="white" placeholder="Email" />

          <Button alignSelf="flex-end" colorScheme="pink">
            Criar Conta
          </Button>

          <HStack w="full" justify="space-between">
            <NextLink href="/login" label="Já possuo uma conta" />
            <NextLink href="/" label="Voltar" />
          </HStack>
        </VStack>
      }
    />
  );
};

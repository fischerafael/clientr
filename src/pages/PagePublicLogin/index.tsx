import React from "react";

import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";

import { TemplatePagePublic } from "../../components/Templates/TemplatePublicPage";
import { NextLink } from "../../components/Atoms/NextLink";

export const PagePublicLogin = () => {
  return (
    <TemplatePagePublic
      leftSection={
        <VStack w="full">
          <Text>Login</Text>

          <Input placeholder="Email" />

          <Button colorScheme="pink">Log In</Button>

          <NextLink href="/create-account" label="Criar Conta" />
          <NextLink href="/" label="Voltar" />
        </VStack>
      }
    />
  );
};

import React from "react";
import NextLink from "next/link";
import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";

import { TemplatePagePublic } from "../../components/Templates/TemplatePublicPage";

export const PagePublicLogin = () => {
  return (
    <TemplatePagePublic
      leftSection={
        <VStack w="full">
          <Text>Login</Text>

          <Input placeholder="Email" />

          <Button colorScheme="purple">Log In</Button>

          <NextLink href="/create-account">
            <Text as="a">Criar Conta</Text>
          </NextLink>
        </VStack>
      }
    />
  );
};

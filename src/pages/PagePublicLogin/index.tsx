import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { TemplatePagePublic } from "../../components/Templates/TemplatePublicPage";

export const PagePublicLogin = () => {
  return (
    <TemplatePagePublic
      leftSection={
        <Flex>
          <Text>Login</Text>
        </Flex>
      }
    />
  );
};

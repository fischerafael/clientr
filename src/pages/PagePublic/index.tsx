import React from "react";
import { Flex } from "@chakra-ui/react";

import { LeftSection } from "./components/LeftSection";
import { RightSection } from "./components/RightSection";

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
        <LeftSection />
        <RightSection />
      </Flex>
    </Flex>
  );
};

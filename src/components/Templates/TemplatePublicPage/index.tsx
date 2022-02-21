import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { RightSection } from "../../../pages/PagePublic/components/RightSection";

interface TemplatePagePublicProps {
  leftSection: ReactNode;
  rightSection?: ReactNode;
}

export const TemplatePagePublic = ({
  leftSection,
  rightSection = <RightSection />,
}: TemplatePagePublicProps) => {
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
        {leftSection}
        {rightSection}
      </Flex>
    </Flex>
  );
};

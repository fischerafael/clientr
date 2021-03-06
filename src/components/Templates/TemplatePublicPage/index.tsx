import React, { ReactNode } from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { RightSection } from "../../Organisms/RightSection";

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
      bgGradient="linear(to-t, purple.50, pink.50)"
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
          maxW="350px"
          h="full"
          justify="center"
          align="flex-start"
          spacing="8"
        >
          {leftSection}
        </VStack>

        {rightSection}
      </Flex>
    </Flex>
  );
};

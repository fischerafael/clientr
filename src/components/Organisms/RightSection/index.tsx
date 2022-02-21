import { Image, VStack } from "@chakra-ui/react";

export const RightSection = () => {
  return (
    <VStack maxW="container.sm">
      <Image objectFit="contain" src="/hero-image.svg" />
    </VStack>
  );
};

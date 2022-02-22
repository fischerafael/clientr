import { Image, VStack } from "@chakra-ui/react";

export const RightSection = () => {
  return (
    <VStack maxW="500px">
      <Image objectFit="contain" src="/hero-image.svg" />
    </VStack>
  );
};

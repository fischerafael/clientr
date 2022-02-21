import { Button, Text } from "@chakra-ui/react";
import { handleNavigate } from "../../../../utils";

export const LeftSection = () => {
  return (
    <>
      <Text fontWeight="bold" color="pink.500" fontSize="xl">
        Clientr
      </Text>

      <Text fontSize="6xl" fontWeight="bold" lineHeight="1">
        Seu sistema de gerenciamento de clientes na nuvem.
      </Text>

      <Text fontSize="lg">
        Gerencie seus clientes de uma maneira fácil, rápida e centralizada.
      </Text>

      <Button colorScheme="pink" onClick={() => handleNavigate("/login")}>
        Acessar Conta
      </Button>
    </>
  );
};

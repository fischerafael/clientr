import { ReactNode } from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

interface NextLinkProps {
  href: string;
  label: ReactNode;
}

export const NextLink = ({ href, label }: NextLinkProps) => {
  return (
    <Link href={href}>
      <Text
        fontSize="xs"
        _hover={{ color: "pink.500", cursor: "pointer" }}
        as="a"
      >
        {label}
      </Text>
    </Link>
  );
};

import {Flex, Text} from "@radix-ui/themes";
import Image from "next/image";

export type TeamBandageProps = {
  name: string;
  logoUrl?: string;
  rtl?: boolean;
};

export const TeamBandage = ({
  name,
  logoUrl,
  rtl
}: TeamBandageProps) => {
  return (
    <Flex direction={rtl ? 'row-reverse' : 'row'} align="center" gap="0.625rem">
      <Image
        src={logoUrl || '/default-team-logo.svg'}
        alt={`${name} logo`}
        width={48}
        height={48}
      />
      <Text className="text-base font-semibold">{name}</Text>
    </Flex>
  );
};
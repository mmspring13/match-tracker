'use client';

import './header.scss';
import Image from "next/image";
import {Box, Flex, Text} from "@radix-ui/themes";
import {Button} from "@/ui/button";
import {Icon} from "@/components/icon";
import {useMittMatches} from "@/features/matches";
import clsx from "clsx";
import {useDocumentLoaded} from "@/hooks/useDocumentLoaded";
import {useMemo} from "react";

export const AppHeader = () => {
  const matchesState = useMittMatches();

  const displayError = useMemo(() => {
    if (matchesState?.error) {
      return 'Ошибка: не удалось загрузить информацию';
    }
    return null;
  }, [matchesState?.error]);

  const documentLoaded = useDocumentLoaded();

  return (
    <header className="AppHeader">
      <Flex justify="between" align="center" wrap="wrap" gap="2">
        <Box>
          <Image src="logo.svg" alt="logo" width={257} height={32} priority />
        </Box>
        <Flex>
          {displayError && (
            <Flex
              className="px-6 py-3.5 bg-gray-1100 mr-3 rounded-sm"
            >
              <Icon icon="alert-triangle" className="mr-2.5"/>
              <Text className="text-lg font-medium">
                Ошибка: не удалось загрузить информацию
              </Text>
            </Flex>
          )}
          <Button
            type="button"
            className="AppHeader__refresh-button"
            onClick={matchesState?.refetch}
            disabled={matchesState?.pending || !documentLoaded}
          >
            Обновить
            <Icon
              icon="refresh"
              className={clsx('ml-2.5', { 'animate-spin': matchesState?.pending })}
            />
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

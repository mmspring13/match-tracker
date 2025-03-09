import {Suspense} from "react";
import {MatchList} from "@/components/matches/match-list";
import {fetchMatches} from "@/features/matches/api";
import {FetchMatchesError, MatchesProvider} from "@/features/matches";
import {Flex, Skeleton} from "@radix-ui/themes";

const handleFetchMatches = async () => {
  try {
    return await fetchMatches();
  } catch (err: unknown) {
    if (err instanceof FetchMatchesError) {
      return err;
    }
    return new FetchMatchesError();
  }
};

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center px-10.5 overflow-auto">
      <Suspense fallback={
        <Flex className="w-full" direction="column">
          <Skeleton width="100%" height="87px" />
          <Skeleton width="100%" height="87px" className="my-5" />
          <Skeleton width="100%" height="87px" />
        </Flex>
      }>
        <MatchesProvider fetchMatches={handleFetchMatches()}>
          <MatchList />
        </MatchesProvider>
      </Suspense>
    </main>
  );
}

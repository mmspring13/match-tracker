'use client';

import {createContext, PropsWithChildren, use, useState} from "react";
import { fetchMatches as apiFetchMatches } from "@/features/matches/api";
import {FetchMatchesError, Match, MatchesContextState} from "./types";

export const MatchesContext = createContext<MatchesContextState>({
  pending: true,
  matches: [],
  refetch: async () => {},
});

export const MatchesProvider = ({
  fetchMatches,
  children
}: PropsWithChildren<{
  fetchMatches: Promise<Match[] | Error>;
}>) => {
  const matchesResponse = use(fetchMatches);
  let initialMatches: Match[] = [];
  let initialError: FetchMatchesError | null = null;
  if (matchesResponse instanceof Error) {
    initialError = new FetchMatchesError(matchesResponse.message);
  } else if (Array.isArray(matchesResponse)) {
    initialMatches = matchesResponse;
  }

  const [pending, setPending] = useState(false);
  const [error, setError] = useState<FetchMatchesError | null>(initialError);
  const [matches, setMatches] = useState<Match[]>(initialMatches);

  const refetch = async () => {
    setError(null);
    setPending(true);
    apiFetchMatches()
      .then(setMatches)
      .catch(setError)
      .finally(() => setPending(false));
  }

  return (
    <MatchesContext.Provider value={{
      pending,
      error,
      matches,
      refetch,
    }}>
      {children}
    </MatchesContext.Provider>
  );
};

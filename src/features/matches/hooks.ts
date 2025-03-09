'use client';

import {useContext, useEffect, useState} from "react";
import { MatchesContext } from "./provider";
import { emitter } from './helpers';
import {MatchesContextState} from "@/features/matches/types";

export const useMatches = () => useContext(MatchesContext);

export const useMittMatches = () => {
  const [matchesState, setMatchesState] = useState<MatchesContextState | null>(null);

  useEffect(() => {
    emitter.on('passState', setMatchesState);
    return () => emitter.on('passState', setMatchesState);
  }, []);

  return matchesState;
};


'use client';

import {memo, useEffect} from "react";
import { Root } from "@radix-ui/react-accordion";
import {useMatches} from "@/features/matches/hooks";
import {emitter} from "@/features/matches";
import {MatchListItem} from "@/components/match-list-item";

const MemoMatchListItem = memo(MatchListItem);

export const MatchList = () => {
  const matchesCtx = useMatches();
  const { matches } = matchesCtx;

  useEffect(() => {
    emitter.emit('passState', matchesCtx);
  }, [matchesCtx]);

  const firstMatch = matches?.[0]?.title;

  return (
    <Root
      className="flex flex-col w-full gap-5"
      defaultValue={firstMatch ? [firstMatch] : []}
      type="multiple"
    >
      {matches.map(((match) => (
        <MemoMatchListItem match={match} key={`${match.title}:${match.homeTeam.name}:${match.awayTeam.name}`} />
      )))}
    </Root>
  );
};

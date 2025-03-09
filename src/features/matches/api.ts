import {FetchMatchesError, Match } from "./types";

export const fetchMatches = async () => {
  try {
    const req = await fetch(
      new URL('/fronttemp-service/fronttemp', process.env.NEXT_PUBLIC_API_URL as string),
      {
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        cache: 'no-cache',
      }
    );
    const response = await req.json();
    if (
      req.status !== 200
      || !req.ok
      || !response.ok
      || !response.data
    ) {
      throw new FetchMatchesError(
        response.error,
        req.status,
        response,
      );
    }
    return (response.data?.matches || []) as Match[]
  } catch (error: unknown) {
    if (error instanceof FetchMatchesError) {
      throw error;
    }
    throw new FetchMatchesError();
  }
};

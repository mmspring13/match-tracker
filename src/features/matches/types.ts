export class FetchMatchesError extends Error {
  constructor(public message = 'unknown_error', public code?: number, public error?: unknown) {
    super(message);

    this.message = message;
    this.code = code;
    this.error = error;
  }
}

// Define the Player interface
export interface Player {
  username: string; // Имя игрока
  kills: number;   // Количество убийств
}

// Define the Team interface
export interface Team {
  name: string;       // Название команды
  players: Player[];  // Список игроков в команде
  points: number;     // Количество очков
  place: number;      // Место в турнирной таблице
  total_kills: number; // Количество убийств
}

// Define the MatchStatus type as a union of string literals
export type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished';

// Define the Match interface
export interface Match {
  time: string;       // Время проведения матча (ISO 8601 date-time format)
  title: string;      // Название матча
  homeTeam: Team;     // Домашняя команда
  awayTeam: Team;     // Гостевая команда
  homeScore: number;  // Счет домашней команды
  awayScore: number;  // Счет гостевой команды
  status: MatchStatus; // Статус матча
}


export type MatchMittEvents = {
  passState: MatchesContextState;
};

export type MatchesContextState = {
  pending: boolean;
  matches: Match[];
  error?: FetchMatchesError | null;
  refetch: () => Promise<void>;
}
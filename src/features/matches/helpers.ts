import mitt from "mitt";
import { MatchMittEvents } from "./types";

export const emitter = mitt<MatchMittEvents>();

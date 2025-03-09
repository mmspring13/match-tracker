import {AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";
import {Flex, Text} from "@radix-ui/themes";
import './match-list-item.scss';
import {Icon} from "@/components/icon";
import {TeamBandage} from "@/components/team-badge/team-bandage";
import clsx from "clsx";
import {MatchTeamStats} from "@/components/match-team-stats";
import { Match } from "@/features/matches";

const statusText: Record<Match['status'], string> = {
  'Scheduled': 'Match preparing',
  'Ongoing': 'Live',
  'Finished': 'Finished'
};

export const MatchListItem = ({ match }: { match: Match }) => {
  return (
    <AccordionItem value={match.title} className="MatchListItem py-4 px-9 overflow-auto rounded-sm">
      <Flex justify="between" align="center" direction="row" className="w-full">
        <Flex justify="between" align="center" direction="row" className="pr-3 w-full" wrap='wrap'>
          <TeamBandage name={match.homeTeam.name} />
          <Flex direction="column" align="center">
            <Text
              className="font-semibold text-xl"
            >
              {match.homeScore} : {match.awayScore}
            </Text>
            <Flex
              className={clsx(
                "min-w-[5.75rem] mt-1 py-1.5 px-2 items-center justify-center rounded-sm",
                {
                  'bg-brand': match.status === "Finished",
                  'bg-success': match.status === "Ongoing",
                  'bg-warning': match.status === "Scheduled",
                }
              )}
            >
              <Text
                className="font-semibold text-xs leading-none text-center w-full"
              >{statusText[match.status]}</Text>
            </Flex>
          </Flex>
          <TeamBandage name={match.awayTeam.name} rtl />
        </Flex>
        <AccordionTrigger className="MatchListItem__trigger">
          <Icon icon="toggle-arrow" className="MatchListItem__trigger__icon" />
        </AccordionTrigger>
      </Flex>
      <AccordionContent className="MatchListItem__content">
        <Flex justify="between" align="center" direction="row" gap="8" className="mt-11 p-3">
          <MatchTeamStats team={match.homeTeam} />
          <MatchTeamStats team={match.awayTeam} />
        </Flex>
      </AccordionContent>
    </AccordionItem>
  );
};

import './match-team-stats.scss';
import {Box, Flex, Text} from "@radix-ui/themes";
import {PlayerBadge} from "@/components/player-badge";
import { Team } from '@/features/matches';

export type MatchTeamStatsProps = {
  team: Team;
};

export const MatchTeamStats = ({
  team
}: MatchTeamStatsProps) => {
  return (
    <Box className="MatchTeamStats w-full">
      <Flex gap="2" wrap='wrap'>
        {team.players.map((player) => (
         <Flex
           key={player.username}
           justify="between"
           direction="row"
           align="center"
           className="bg-gray-1100 flex-1 px-6 py-2 rounded-sm min-w-3xs"
         >
           <PlayerBadge name={player.username} />
           <Text className="font-semibold text-base text-nowrap pl-2">
             <span className="pr-2 text-sm text-[#FAFAFA66] text-right">Убийств:</span> {player.kills}
           </Text>
         </Flex>
        ))}
      </Flex>
      <Flex
        justify="between"
        direction="row"
        wrap="wrap"
        align="center"
        className="MatchTeamStats__common-stats"
      >
        <Box className="MatchTeamStats__common-stat-item">
          <Text className="MatchTeamStats__common-stat-item__text">
            <span className="MatchTeamStats__common-stat-item__text_mark">Points:</span> {team.points}
          </Text>
        </Box>
        <Box className="MatchTeamStats__common-stat-item">
          <Text className="MatchTeamStats__common-stat-item__text">
            <span className="MatchTeamStats__common-stat-item__text_mark">Место:</span> {team.place}
          </Text>
        </Box>
        <Box className="MatchTeamStats__common-stat-item">
          <Text className="MatchTeamStats__common-stat-item__text">
            <span className="MatchTeamStats__common-stat-item__text_mark">Всего убийств:</span> {team.total_kills}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

import './player-badge.scss';
import Image from "next/image";
import tiara from './assets/tiara.png';
import defaultPlayer from './assets/default-player.png';
import { Text } from "@radix-ui/themes";

export type PlayerBadgeProps = {
  avatarUrl?: string;
  name: string;
};

export const PlayerBadge = ({
  avatarUrl,
  name
}: PlayerBadgeProps) => {
  return (
    <div className="PlayerBadge flex items-center overflow-hidden">
      <div className="PlayerBadge__avatar">
        <Image
          src={tiara}
          alt="tiara"
          loading="lazy"
          layout="fill"
          className="PlayerBadge__avatar__tiara"
        />
        <div className="w-6.5 h-6.5 absolute inset-0 m-auto">
          <Image
            src={avatarUrl || defaultPlayer}
            alt="player"
            loading="lazy"
            layout="fill"
            className="PlayerBadge__avatar__player"
          />
        </div>
      </div>
      <Text className="pl-2 font-semibold text-base truncate">{name}</Text>
    </div>
  );
};
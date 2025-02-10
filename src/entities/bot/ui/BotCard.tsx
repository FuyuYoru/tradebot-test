import { IBot } from "@/entities/bot/model/types";
import { BotIcon } from "@/entities/bot/ui/BotIcon";
import { FC } from "react";

type BotCardProps = {
    bot: IBot;
    selectedPeriod: '24h' | '7d' | '30d' | '60d' | '90d' | 'all_time';
    onClick: () => void;
}

export const BotCard: FC<BotCardProps> = ({bot, selectedPeriod, onClick}) => {
    return (
        <div className="flex flex-col" onClick={() => onClick()}>
            <BotIcon />
            <div className="flex flex-col gap-[5px]">
                <p>{bot.type.toUpperCase()}</p>
                <p>{bot[selectedPeriod]}%</p>
            </div>
        </div>
    )
}
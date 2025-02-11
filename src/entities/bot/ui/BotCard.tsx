import { IBot } from "@/entities/bot/model/types";
import { BotIcon } from "@/entities/bot/ui/BotIcon";
import { MegabotIcon } from "@/entities/bot/ui/MegabotIcon";
import { FC } from "react";

type BotCardProps = {
    bot: IBot;
    selectedPeriod: '24h' | '7d' | '30d' | '60d' | '90d' | 'all_time';
    onClick: () => void;
}

export const BotCard: FC<BotCardProps> = ({bot, selectedPeriod, onClick}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 min-w-[124px] min-h-[124px] bg-[#1c293f] rounded-md" onClick={() => onClick()}>
            {bot.type === 'megabot'? <MegabotIcon color={bot.color}/> :<BotIcon color={bot.color}/>}
            <div className="flex flex-col gap-[1px]">
            <p className="inline m-0 text-white font-extrabold text-xs text-center">
                {bot.type.toUpperCase()}
            </p>
            <p className="inline m-0 text-[#5ba352] font-extrabold text-xs text-center">
              {bot[selectedPeriod]}%
            </p>
            </div>
        </div>
    )
}
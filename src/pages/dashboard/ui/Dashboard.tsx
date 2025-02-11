import { useEffect } from "react";
import { IntervalSelector } from "@/shared/ui/IntervalSelector";
import { useProfitabilityStore } from "@/app/features/profitability/model/store";
import { BotCard } from "@/entities/bot";
import { ProfitChart } from "@/app/features/profitability/ui/ProfitChart";

export const Dashboard = () => {
    const { trading_capital, trading_capital_currency, balance, on_hold, bots, loadProfitabilityData } = useProfitabilityStore();

    useEffect(() => {
        if ([trading_capital, trading_capital_currency, balance, on_hold, bots].every(value => value === null)) {
            loadProfitabilityData();
        }
        console.log(bots[0]);
    }, [trading_capital, trading_capital_currency, balance, on_hold, bots, loadProfitabilityData]);
    
    return (
        <div className="w-full h-full flex flex-col py-4 gap-4">
            <div className="flex flex-row px-2 justify-between">
                <div className="flex flex-col">
                    <p className="font-extrabold">TRADING CAPITAL</p>
                    <p className="text-4xl text-white    ">{`${trading_capital} ${trading_capital_currency?.toUpperCase()}`}</p>
                </div>
                <div className="flex flex-col gap-0 items-start justify-end">
                    <p className="font-extrabold">BALANCE: <span className="text-white">{balance}</span></p>
                    <p className="font-extrabold">ON HOLD: <span className="text-white">{on_hold}</span></p>
                </div>
            </div>
            {bots && bots.length && <ProfitChart fullStatistics={bots[0].fullStatistics} startDate={bots[0].started_at} />}
            {/* <div className="grow"></div> */}
            <div className="flex flex-row flex-wrap w-full px-2 gap-[1px]">
                {bots?.map((item, index) => 
                    <BotCard key={index} bot={item} selectedPeriod={"24h"} onClick={function (): void {
                        throw new Error("Function not implemented.");
                    } }/>
                )}
            </div>
            <div className="flex flex-row w-full px-2 text-sm items-center gap-1">
                <span className="text-nowrap font-bold">Time Range:</span>
                <IntervalSelector />
            </div>
        </div>
    );
};

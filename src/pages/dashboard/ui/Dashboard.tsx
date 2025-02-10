import { useEffect } from "react";
import { IntervalSelector } from "@/shared/ui/IntervalSelector";
import { useProfitabilityStore } from "@/app/features/profitability/model/store";
import { BotCard } from "@/entities/bot";

export const Dashboard = () => {
    const { trading_capital, trading_capital_currency, balance, on_hold, bots, loadProfitabilityData } = useProfitabilityStore();

    useEffect(() => {
        if ([trading_capital, trading_capital_currency, balance, on_hold, bots].every(value => value === null)) {
            loadProfitabilityData();
        }
    }, [trading_capital, trading_capital_currency, balance, on_hold, bots, loadProfitabilityData]);

    return (
        <div className="w-full h-full flex flex-col py-4">
            <div className="grow"></div>
            <div className="flex flex-row flex-wrap">
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

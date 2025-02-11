import { useProfitabilityStore } from "@/app/features/profitability/model/store";
import { AlignJustify, RefreshCcw } from "lucide-react";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
    '/': 'Dashboard',
    '/megabot': 'Megabot',
    '/bot-market': 'Bot Market',
    '/coin-prices': 'Coin prices',
    '/profile': 'Profile',
}

export const Header:FC = () =>  {

    const location = useLocation();
    const {loadProfitabilityData} = useProfitabilityStore();
    const pageTitle = pageTitles[location.pathname] || '404';

    const reloadAction = async () => {
        console.log('WORKED')
        await loadProfitabilityData();
    }

    return(
        <header className="flex flex-row px-4 py-4 justify-between">
            <AlignJustify />
                <p className="text-lg font-bold">{pageTitle}</p>
            <RefreshCcw onClick={reloadAction}/>
        </header>
    )
}
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

    const pageTitle = pageTitles[location.pathname] || '404';

    return(
        <header className="flex flex-row px-4 py-8">
            <AlignJustify />
                <p>{pageTitle}</p>
            <RefreshCcw />
        </header>
    )
}
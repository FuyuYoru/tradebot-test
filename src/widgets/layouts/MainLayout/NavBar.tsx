import { IconButton } from '@/shared/ui/IconButton';
import { IconButtonWithCounter } from '@/shared/ui/IconButtonWithCounter';
import { List, ChartNoAxesCombined, ShoppingCart, CircleDollarSign, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();
  
    const navLinks = [
      { name: 'Dashboard', path: '/', icon: <List /> },
      { name: 'Megabot', path: '/megabot', icon: <ChartNoAxesCombined /> },
      { name: 'Bot market', path: '/bot-market', icon: <ShoppingCart />},
      { name: 'Coin prices', path: '/coin-prices', icon: <CircleDollarSign />},
      { name: 'Profile', path: '/profile', icon: <Settings />}
    ];
  
    return (
      <div>
        <div className="flex flex-row">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name === 'Profile'? 
                <IconButtonWithCounter icon={link.icon} text={link.name} counterValue={3}/> 
                : <IconButton icon={link.icon} text={link.name}/>
                }
            </Link>
          ))}
        </div>
      </div>
    );
  };
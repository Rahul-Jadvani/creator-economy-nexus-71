
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, PlusCircle, User, TrendingUp, Ticket, LayoutGrid, Coins } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: PlusCircle, label: 'Create', path: '/create' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: TrendingUp, label: 'Trending', path: '/trending' },
    { icon: Ticket, label: 'Tickets', path: '/tickets' },
    { icon: LayoutGrid, label: 'Marketplace', path: '/marketplace' },
    { icon: Coins, label: 'Stake', path: '/stake' },
  ];
  
  const handleNavigation = (path: string) => {
    // Use window.location.href as a fallback if navigate doesn't work
    console.log('Navigating to:', path);
    try {
      // Force navigation with window.location if needed for reliability
      window.location.href = path;
    } catch (error) {
      console.error('Navigation error:', error);
      // Last resort fallback
      window.location.href = path;
    }
  };
  
  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto glass-card py-4 px-2 m-2">
      <div className="px-3 mb-6">
        <h2 className="font-orbitron text-lg font-semibold">Navigate</h2>
      </div>
      <nav className="space-y-1 px-2">
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center px-3 py-3 rounded-lg transition-all group cursor-pointer ${
              location.pathname === item.path
                ? 'bg-white/10 text-white border-l-2 border-white'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <item.icon className={`h-5 w-5 mr-3 ${location.pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-8 px-4">
        <div className="glass-card p-4 rounded-xl">
          <h3 className="font-orbitron text-sm text-white/90 mb-2">Your VYB Balance</h3>
          <p className="text-2xl font-bold text-glow">0.0 VYB</p>
          <div className="mt-3 flex justify-between text-xs text-gray-400">
            <span>Staked: 0.0</span>
            <span>Rewards: 0.0</span>
          </div>
          <button 
            className="mt-4 w-full glass-button py-2 px-4 text-sm font-medium hover:bg-white/10 transition-all duration-200"
            onClick={() => handleNavigation('/stake')}
          >
            Get VYB Tokens
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

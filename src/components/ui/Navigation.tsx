import { useState } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');
  
  const navLinks = ['Dashboard', 'Stake', 'Rewards', 'Analytics'];
  
  const handleConnectWallet = () => {
    alert('Wallet connection feature - This would connect to MetaMask or WalletConnect');
  };

  return (
    <nav className="flex justify-between items-center mb-8 px-8 py-4 bg-[hsl(225_22%_9%/0.6)] backdrop-blur-[20px] border border-[hsl(0_0%_100%/0.08)] rounded-[20px] animate-slide-down">
      <div className="text-2xl font-extrabold bg-gradient-to-r from-[hsl(168_100%_50%)] to-[hsl(252_100%_69%)] bg-clip-text text-transparent">
        ⚡ KOLS Staking
      </div>
      
      <div className="hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setActiveLink(link)}
            className={`font-medium transition-colors duration-300 cursor-pointer ${
              activeLink === link 
                ? 'text-[hsl(168_100%_50%)]' 
                : 'text-[hsl(219_14%_63%)] hover:text-[hsl(168_100%_50%)]'
            }`}
          >
            {link}
          </button>
        ))}
      </div>
      
      <button 
        onClick={handleConnectWallet}
        className="px-6 py-3 bg-gradient-to-r from-[hsl(168_100%_50%)] to-[hsl(252_100%_69%)] border-none rounded-xl text-[hsl(228_25%_4%)] font-semibold cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
      >
        0x742d...35B2
      </button>
    </nav>
  );
};

export default Navigation;

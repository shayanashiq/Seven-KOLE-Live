import { useState } from 'react';

const StakingCard = () => {
  const [stakeAmount, setStakeAmount] = useState(1000);
  const balance = 15789;

  const handleStake = () => {
    alert(`Staking ${stakeAmount} KOLS tokens. This would trigger a smart contract transaction.`);
  };

  const setMaxAmount = () => {
    setStakeAmount(balance);
  };

  const isValidAmount = stakeAmount >= 1000;

  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          KOLS Staking
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
      </div>

      <div className="mb-6">
        <div className={`relative flex items-center bg-[hsl(228_25%_4%/0.6)] border-2 rounded-2xl px-5 py-3 transition-all duration-300 ${
          isValidAmount 
            ? 'border-[hsl(0_0%_100%/0.08)] focus-within:border-[hsl(168_100%_50%)] focus-within:shadow-[0_0_0_4px_hsl(168_100%_50%/0.1)]' 
            : 'border-[hsl(0_84%_60%)]'
        }`}>
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(Number(e.target.value))}
            min={1000}
            step={100}
            className="bg-transparent border-none text-white text-2xl font-semibold font-mono w-full outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button 
            onClick={setMaxAmount}
            className="px-4 py-2 bg-[hsl(168_100%_50%/0.1)] border border-[hsl(168_100%_50%/0.3)] rounded-lg text-[hsl(168_100%_50%)] font-semibold text-xs cursor-pointer transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.2)]"
          >
            MAX
          </button>
          <span className="text-[hsl(218_11%_46%)] font-semibold ml-2">KOLS</span>
        </div>
        <div className="text-xs text-[hsl(218_11%_46%)] mt-2 font-mono">
          Minimum total stake: 1,000 KOLS per wallet
        </div>
      </div>

      <div className="mb-6 space-y-4">
        {[
          { label: 'Your Balance', value: '15,789', currency: 'KOLS' },
          { label: 'Est. Daily Rewards', value: '2.45', currency: 'USDT' },
          { label: 'Est. Monthly Rewards', value: '73.50', currency: 'USDT' },
        ].map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-center p-4 bg-[hsl(168_100%_50%/0.03)] border border-[hsl(168_100%_50%/0.1)] rounded-xl transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.06)] hover:translate-x-1"
          >
            <span className="text-[hsl(219_14%_63%)] text-sm">{item.label}</span>
            <span className="text-xl font-semibold font-mono">
              {item.value} <span className="text-[hsl(168_100%_50%)] font-semibold">{item.currency}</span>
            </span>
          </div>
        ))}
      </div>

      <button 
        onClick={handleStake}
        className="w-full py-4 px-8 bg-gradient-to-r from-[hsl(168_100%_50%)] to-[hsl(252_100%_69%)] border-none rounded-2xl text-base font-semibold cursor-pointer transition-all duration-300 text-[hsl(228_25%_4%)] shadow-[0_10px_30px_hsl(168_100%_50%/0.3)] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_hsl(168_100%_50%/0.4)] relative overflow-hidden"
      >
        <span className="relative z-10">💰 Stake Now</span>
      </button>

      <ul className="mt-6 space-y-3">
        {[
          'Becomes active immediately',
          'Participates in reward distribution',
          'Earn daily USDT rewards',
          '7-day unstaking period'
        ].map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-[hsl(219_14%_63%)] text-sm">
            <span className="w-5 h-5 bg-[hsl(168_100%_50%/0.1)] rounded-full flex items-center justify-center text-[hsl(168_100%_50%)] font-bold text-xs shrink-0">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StakingCard;

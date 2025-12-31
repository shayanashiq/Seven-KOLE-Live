const RewardsManagement = () => {
  const handleClaimRewards = () => {
    alert('Claiming 127.84 USDT rewards. This would trigger a smart contract transaction.');
  };

  const handleRequestUnstake = () => {
    alert('Requesting unstake. Your tokens will enter a 7-day lockup period.');
  };

  const handleWithdrawUnstaked = () => {
    alert('No unstaked tokens available for withdrawal.');
  };

  const handleClaimAndUnstake = () => {
    alert('This will claim your rewards and initiate unstaking in a single transaction.');
  };

  const feeStructure = [
    { label: 'Contract USDT Balance', value: '12,456', currency: 'USDT' },
    { label: 'Total User Net Withdrawals', value: '489,234', currency: 'USDT' },
    { label: 'Redistribution Fee (1.8%) Total', value: '9,872', currency: 'USDT' },
    { label: 'Insurance Fee (0.2%) Total', value: '1,097', currency: 'USDT' },
  ];

  return (
    <div className="card hover-glow col-span-full">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          Rewards Management
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          <button 
            onClick={handleClaimRewards}
            className="w-full py-4 px-8 bg-gradient-to-r from-[hsl(168_100%_50%)] to-[hsl(252_100%_69%)] border-none rounded-2xl text-base font-semibold cursor-pointer transition-all duration-300 text-[hsl(228_25%_4%)] shadow-[0_10px_30px_hsl(168_100%_50%/0.3)] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_hsl(168_100%_50%/0.4)] relative overflow-hidden"
          >
            <span className="relative z-10">🎁 Claim Rewards</span>
          </button>
          <div className="text-xs text-[hsl(218_11%_46%)] text-center mt-4 px-3 py-3 bg-[hsl(252_100%_69%/0.05)] rounded-xl border border-[hsl(252_100%_69%/0.1)]">
            Withdraw 127.84 USDT to your wallet
          </div>
        </div>

        <div>
          <button 
            onClick={handleRequestUnstake}
            className="w-full py-4 px-8 bg-[hsl(0_0%_100%/0.05)] border border-[hsl(0_0%_100%/0.08)] rounded-2xl text-base font-semibold cursor-pointer transition-all duration-300 text-white hover:bg-[hsl(0_0%_100%/0.1)] hover:border-[hsl(168_100%_50%)] relative overflow-hidden mb-4"
          >
            <span className="relative z-10">⏳ Request Unstake</span>
          </button>
          <div className="text-xs text-[hsl(218_11%_46%)] text-center px-3 py-3 bg-[hsl(252_100%_69%/0.05)] rounded-xl border border-[hsl(252_100%_69%/0.1)]">
            Move stake into 7-day pending period
          </div>
        </div>

        <div>
          <button 
            onClick={handleWithdrawUnstaked}
            disabled
            className="w-full py-4 px-8 bg-transparent border-2 border-[hsl(0_0%_100%/0.08)] rounded-2xl text-base font-semibold cursor-not-allowed transition-all duration-300 text-white opacity-50 relative overflow-hidden mb-4"
          >
            <span className="relative z-10">💸 Withdraw Unstaked</span>
          </button>
          <div className="text-xs text-[hsl(218_11%_46%)] text-center px-3 py-3 bg-[hsl(252_100%_69%/0.05)] rounded-xl border border-[hsl(252_100%_69%/0.1)]">
            Available after 7-day lockup period
          </div>
        </div>

        <div>
          <button 
            onClick={handleClaimAndUnstake}
            className="w-full py-4 px-8 bg-transparent border-2 border-[hsl(0_0%_100%/0.08)] rounded-2xl text-base font-semibold cursor-pointer transition-all duration-300 text-white hover:border-[hsl(168_100%_50%)] hover:bg-[hsl(168_100%_50%/0.05)] relative overflow-hidden mb-4"
          >
            <span className="relative z-10">⚡ Claim + Unstake</span>
          </button>
          <div className="text-xs text-[hsl(218_11%_46%)] text-center px-3 py-3 bg-[hsl(252_100%_69%/0.05)] rounded-xl border border-[hsl(252_100%_69%/0.1)]">
            Combined action in single transaction
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)] mb-4">
          Fee Structure & Pool Status
        </h3>
        <div className="grid gap-4">
          {feeStructure.map((item, index) => (
            <div 
              key={index}
              className="flex justify-between items-center p-5 bg-[hsl(168_100%_50%/0.03)] border border-[hsl(168_100%_50%/0.1)] rounded-2xl transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.06)] hover:border-[hsl(168_100%_50%/0.2)] hover:translate-x-1"
            >
              <span className="text-sm text-[hsl(219_14%_63%)]">{item.label}</span>
              <span className="text-lg font-semibold font-mono">
                {item.value} <span className="text-[hsl(168_100%_50%)] font-semibold">{item.currency}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsManagement;

const WalletStateCard = () => {
  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          My Wallet State
        </span>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(160_84%_39%/0.1)] border border-[hsl(160_84%_39%/0.3)] rounded-xl text-xs font-semibold text-[hsl(160_84%_39%)] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-[hsl(160_84%_39%)] rounded-full animate-pulse"></span>
          Active
        </div>
      </div>

      <div className="grid gap-4">
        {[
          { label: 'Active Stake', value: '2,450', currency: 'KOLS' },
          { label: 'My Share', value: '3.42%', isPercentage: true },
          { label: 'Pending Unstake', value: '0', currency: 'KOLS' },
          { label: 'Unlock Time', value: '-', isSmall: true },
          { label: 'Withdrawable Rewards', value: '127.84', currency: 'USDT' },
          { label: 'Total Earnings', value: '1,456.32', currency: 'USDT' },
        ].map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-center p-4 bg-[hsl(168_100%_50%/0.03)] border border-[hsl(168_100%_50%/0.1)] rounded-xl transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.06)] hover:translate-x-1"
          >
            <span className="text-[hsl(219_14%_63%)] text-sm">{item.label}</span>
            <span className={`font-semibold font-mono ${item.isPercentage ? 'text-[hsl(168_100%_50%)] text-2xl' : item.isSmall ? 'text-base' : 'text-xl'}`}>
              {item.value} {item.currency && <span className="text-[hsl(168_100%_50%)] font-semibold">{item.currency}</span>}
            </span>
          </div>
        ))}
      </div>

      <div className="text-xs text-[hsl(218_11%_46%)] text-center mt-4 px-3 py-3 bg-[hsl(252_100%_69%/0.05)] rounded-xl border border-[hsl(252_100%_69%/0.1)]">
        Net amount after 2% fee (factual amount you receive)
      </div>
    </div>
  );
};

export default WalletStateCard;

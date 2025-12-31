const transactions = [
  {
    type: 'reward',
    icon: '💰',
    title: 'Reward Claimed',
    description: 'Transaction successful',
    amount: '+45.67 USDT',
    time: '2 hours ago',
    isPositive: true,
  },
  {
    type: 'stake',
    icon: '📈',
    title: 'Staked KOLS',
    description: 'Added to active stake',
    amount: '500 KOLS',
    time: '1 day ago',
    isPositive: false,
  },
  {
    type: 'reward',
    icon: '💰',
    title: 'Reward Claimed',
    description: 'Transaction successful',
    amount: '+82.14 USDT',
    time: '3 days ago',
    isPositive: true,
  },
  {
    type: 'stake',
    icon: '📈',
    title: 'Staked KOLS',
    description: 'Added to active stake',
    amount: '1,950 KOLS',
    time: '5 days ago',
    isPositive: false,
  },
  {
    type: 'unstake',
    icon: '📉',
    title: 'Unstake Requested',
    description: '7-day lockup period',
    amount: '1,000 KOLS',
    time: '12 days ago',
    isPositive: false,
  },
];

const TransactionHistory = () => {
  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          Recent Transactions
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
      </div>

      <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-2">
        {transactions.map((tx, index) => (
          <div 
            key={index}
            className="flex justify-between items-center p-4 bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.08)] rounded-xl transition-all duration-300 hover:bg-[hsl(0_0%_100%/0.04)] hover:border-[hsl(168_100%_50%/0.2)]"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
                tx.type === 'stake' 
                  ? 'bg-[hsl(168_100%_50%/0.1)]' 
                  : tx.type === 'unstake' 
                    ? 'bg-[hsl(0_84%_60%/0.1)]' 
                    : 'bg-[hsl(38_92%_50%/0.1)]'
              }`}>
                {tx.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">{tx.title}</h4>
                <p className="text-xs text-[hsl(218_11%_46%)]">{tx.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-base font-semibold font-mono mb-1 ${tx.isPositive ? 'text-[hsl(160_84%_39%)]' : 'text-white'}`}>
                {tx.amount}
              </div>
              <div className="text-xs text-[hsl(218_11%_46%)]">{tx.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;

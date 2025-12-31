import { useState, useEffect } from 'react';

const APYCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [period, setPeriod] = useState(365);
  const [estimatedRewards, setEstimatedRewards] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const apy = 0.245; // 24.5%
    const dailyRate = apy / 365;
    const rewards = amount * dailyRate * period;
    const total = amount + rewards;
    
    setEstimatedRewards(Math.floor(rewards));
    setTotalValue(Math.floor(total));
  }, [amount, period]);

  return (
    <div className="card hover-glow col-span-full">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          APY Calculator
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 calculator-grid">
        <div className="space-y-6">
          <div>
            <label className="text-[hsl(219_14%_63%)] text-sm block mb-2">Stake Amount (KOLS)</label>
            <div className="relative flex items-center bg-[hsl(228_25%_4%/0.6)] border-2 border-[hsl(0_0%_100%/0.08)] rounded-2xl px-5 py-3 transition-all duration-300 focus-within:border-[hsl(168_100%_50%)] focus-within:shadow-[0_0_0_4px_hsl(168_100%_50%/0.1)]">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={1000}
                step={100}
                className="bg-transparent border-none text-white text-2xl font-semibold font-mono w-full outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <span className="text-[hsl(218_11%_46%)] font-semibold ml-2">KOLS</span>
            </div>
          </div>

          <div>
            <label className="text-[hsl(219_14%_63%)] text-sm block mb-2">Staking Period</label>
            <div className="relative flex items-center bg-[hsl(228_25%_4%/0.6)] border-2 border-[hsl(0_0%_100%/0.08)] rounded-2xl px-5 py-3 transition-all duration-300 focus-within:border-[hsl(168_100%_50%)] focus-within:shadow-[0_0_0_4px_hsl(168_100%_50%/0.1)]">
              <select
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="bg-transparent border-none text-white text-xl font-semibold w-full outline-none cursor-pointer"
              >
                <option value={30} className="bg-[hsl(225_22%_9%)]">1 Month</option>
                <option value={90} className="bg-[hsl(225_22%_9%)]">3 Months</option>
                <option value={180} className="bg-[hsl(225_22%_9%)]">6 Months</option>
                <option value={365} className="bg-[hsl(225_22%_9%)]">1 Year</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="p-8 bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] rounded-2xl text-center">
            <h3 className="text-sm text-[hsl(219_14%_63%)] mb-4 uppercase tracking-wider">Estimated Rewards</h3>
            <div className="text-4xl font-bold font-mono text-[hsl(168_100%_50%)]">
              {estimatedRewards.toLocaleString()} USDT
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] rounded-2xl text-center">
            <h3 className="text-sm text-[hsl(219_14%_63%)] mb-4 uppercase tracking-wider">Total Value After Period</h3>
            <div className="text-4xl font-bold font-mono text-[hsl(168_100%_50%)]">
              {totalValue.toLocaleString()} USDT
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-[hsl(218_11%_46%)] text-center mt-4 px-3 py-3 bg-[hsl(252_100%_69%/0.05)] rounded-xl border border-[hsl(252_100%_69%/0.1)]">
        Calculations are based on current APY of 24.5% and may vary with market conditions
      </div>
    </div>
  );
};

export default APYCalculator;

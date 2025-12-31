const rules = [
  { text: 'Minimum total stake is 1000 KOLS per wallet.', isSub: false },
  { text: 'Staking becomes active immediately and participates in reward distribution.', isSub: false },
  { text: 'Once you request unstake, your stake stops participating in rewards.', isSub: false },
  { text: 'After requesting unstake, there is a 7-day lockup before withdrawal.', isSub: false },
  { text: 'You cannot stake additional KOLS while in pending unstake state.', isSub: false },
  { text: 'A 2% fee is applied on each reward claim:', isSub: false },
  { text: '1.8% is redistributed back to the staking pool', isSub: true },
  { text: '0.2% is allocated to the insurance pool', isSub: true },
  { text: 'The insurance pool is capped at 100 USDT.', isSub: false },
  { text: 'Any excess amount is automatically redistributed to all stakers.', isSub: false },
  { text: 'External DApps will periodically send USDT to the pool,', isSub: false },
  { text: 'which is then distributed to stakers in proportion to their share.', isSub: true },
  { text: 'The contract is designed to operate in a non-custodial, decentralized manner', isSub: false },
  { text: 'without centralized admin control over user funds.', isSub: true },
];

const StakingRules = () => {
  return (
    <div className="card hover-glow col-span-full">
      <div className="flex justify-between items-start mb-8 pb-6 border-b border-[hsl(0_0%_100%/0.08)] max-md:flex-col max-md:gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">Staking Contract Rules</h2>
            <p className="text-sm text-[hsl(219_14%_63%)]">Important guidelines for staking participation</p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.08)] rounded-2xl max-md:p-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[hsl(0_0%_100%/0.08)]">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[hsl(168_100%_50%)]">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span className="text-base font-semibold text-white uppercase tracking-wider">KOLS Staking Rules</span>
          </div>
          <span className="inline-flex items-center px-4 py-2 bg-[hsl(252_100%_69%/0.1)] border border-[hsl(252_100%_69%/0.3)] rounded-lg text-xs font-semibold text-[hsl(252_100%_69%)] uppercase tracking-wider">
            Read Carefully
          </span>
        </div>

        <div className="grid gap-3">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className={`flex items-start gap-4 p-3 transition-all duration-300 rounded-lg hover:bg-[hsl(168_100%_50%/0.03)] ${
                rule.isSub ? 'pl-12 max-md:pl-8' : ''
              }`}
            >
              <div className={`w-6 h-6 rounded-md flex items-center justify-center font-semibold text-sm shrink-0 ${
                rule.isSub 
                  ? 'bg-[hsl(252_100%_69%/0.1)] text-[hsl(252_100%_69%)]' 
                  : 'bg-[hsl(168_100%_50%/0.1)] text-[hsl(168_100%_50%)]'
              }`}>
                {rule.isSub ? '→' : '✓'}
              </div>
              <p className="text-[hsl(219_14%_63%)] leading-relaxed text-[0.9375rem] m-0">
                {rule.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakingRules;

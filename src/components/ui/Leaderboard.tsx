const leaderboardData = [
  { rank: 1, address: '0xA8F2...7B3D', title: 'Early Adopter', amount: '8,456 KOLS', share: '11.8%', isTop3: true },
  { rank: 2, address: '0x742D...35B2', title: 'You', amount: '2,450 KOLS', share: '3.4%', isTop3: true },
  { rank: 3, address: '0x3C9A...F2E1', title: 'Power Staker', amount: '1,987 KOLS', share: '2.8%', isTop3: true },
  { rank: 4, address: '0x9B2F...8C4A', title: 'Active Staker', amount: '1,654 KOLS', share: '2.3%', isTop3: false },
  { rank: 5, address: '0x5E7C...1D9B', title: 'Regular Staker', amount: '1,432 KOLS', share: '2.0%', isTop3: false },
];

const Leaderboard = () => {
  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          Top Stakers
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
      </div>

      <div className="grid gap-3">
        {leaderboardData.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 p-4 bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.08)] rounded-xl transition-all duration-300 hover:bg-[hsl(0_0%_100%/0.04)] hover:border-[hsl(168_100%_50%/0.2)]"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl ${
              item.isTop3 
                ? 'bg-gradient-to-br from-[hsl(168_100%_50%)] to-[hsl(252_100%_69%)] text-[hsl(228_25%_4%)]' 
                : 'bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] text-white'
            }`}>
              {item.rank}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-1">{item.address}</h4>
              <p className="text-xs text-[hsl(218_11%_46%)]">{item.title}</p>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold font-mono mb-1">{item.amount}</div>
              <div className="text-xs text-[hsl(168_100%_50%)]">{item.share}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

const Header = () => {
  return (
    <header className="mb-12 animate-slide-down">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold bg-gradient-to-r from-[hsl(168_100%_50%)] to-[hsl(252_100%_69%)] bg-clip-text text-transparent mb-2 tracking-tight">
            Global Staking Overview
          </h1>
          <p className="text-base text-[hsl(219_14%_63%)] font-normal">
            Real-time statistics and performance metrics
          </p>
        </div>
        
        <div className="flex  gap-8 items-center max-md:flex-col max-md:items-start max-md:gap-4">
          <div className="text-right">
            <div className="text-xs text-[hsl(218_11%_46%)] uppercase tracking-wider">Current APY</div>
            <div className="text-2xl font-bold font-mono text-[hsl(160_84%_39%)]">24.5%</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-[hsl(218_11%_46%)] uppercase tracking-wider">TVL</div>
            <div className="text-2xl font-bold font-mono text-white">$8.9M</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

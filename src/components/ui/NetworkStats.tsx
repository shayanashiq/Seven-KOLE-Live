const networkStats = [
  { label: 'Total Staked Value', value: '$8.9M' },
  { label: '24h Volume', value: '$234.5K' },
  { label: 'Average Stake', value: '57.4 KOLS' },
  { label: 'Network Fee', value: '2.0%' },
];

const NetworkStats = () => {
  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          Network Stats
        </span>
      </div>

      <div className="grid gap-4">
        {networkStats.map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-center p-4 bg-[hsl(168_100%_50%/0.03)] border border-[hsl(168_100%_50%/0.1)] rounded-xl transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.06)] hover:translate-x-1"
          >
            <span className="text-[hsl(219_14%_63%)] text-sm">{item.label}</span>
            <span className="text-xl font-semibold font-mono">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkStats;

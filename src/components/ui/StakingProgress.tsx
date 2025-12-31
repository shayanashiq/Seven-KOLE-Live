const progressData = [
  { label: 'Pool Utilization', value: '67.3%', percentage: 67.3 },
  { label: 'Your Contribution', value: '3.42%', percentage: 3.42 },
  { label: 'Reward Rate', value: '24.5%', percentage: 24.5 },
];

const StakingProgress = () => {
  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          Staking Progress
        </span>
      </div>

      <div className="space-y-6">
        {progressData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center p-4 bg-[hsl(168_100%_50%/0.03)] border border-[hsl(168_100%_50%/0.1)] rounded-xl transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.06)] hover:translate-x-1">
              <span className="text-[hsl(219_14%_63%)] text-sm">{item.label}</span>
              <span className="text-xl font-semibold font-mono">{item.value}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakingProgress;

const comingSoonItems = [
  {
    title: 'Coming Soon #1',
    icon: '✨',
    description: 'Live revenue data from external DApps will be displayed in this area.',
  },
  {
    title: 'Coming Soon #2',
    icon: '⚡',
    description: 'Multiple external services will connect here to share real revenue streams.',
  },
  {
    title: 'Coming Soon #3',
    icon: '✨',
    description: 'Performance of external projects will be reflected in near real-time.',
  },
];

const ExternalDAppRevenue = () => {
  return (
    <div className="card hover-glow col-span-full mb-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          External DApp Revenue
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comingSoonItems.map((item, index) => (
          <div 
            key={index}
            className="p-8 bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.08)] rounded-2xl transition-all duration-300 relative overflow-hidden hover:bg-[hsl(0_0%_100%/0.04)] hover:border-[hsl(168_100%_50%/0.2)] hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[hsl(168_100%_50%)] before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)]">
                {item.icon}
              </div>
            </div>
            <p className="text-[hsl(219_14%_63%)] leading-relaxed text-[0.9375rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExternalDAppRevenue;

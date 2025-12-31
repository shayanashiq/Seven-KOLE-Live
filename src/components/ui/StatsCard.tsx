import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  icon: ReactNode;
  value: string;
  currency?: string;
  label: string;
  change: string;
  isPositive: boolean;
  subLabel: string;
  subValue: string;
  subCurrency?: string;
}

const StatsCard = ({ 
  title, 
  icon, 
  value, 
  currency, 
  label, 
  change, 
  isPositive, 
  subLabel, 
  subValue, 
  subCurrency 
}: StatsCardProps) => {
  return (
    <div className="card hover-glow">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          {title}
        </span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(168_100%_50%/0.1)] to-[hsl(252_100%_69%/0.1)] border border-[hsl(168_100%_50%/0.2)] text-[hsl(168_100%_50%)]">
          {icon}
        </div>
      </div>
      
      <div className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white mb-2 font-mono">
        {value} {currency && <span className="text-[hsl(168_100%_50%)] font-semibold">{currency}</span>}
      </div>
      
      <div className="text-sm text-[hsl(218_11%_46%)] flex items-center gap-2">
        {label}
        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md font-semibold ${
          isPositive 
            ? 'bg-[hsl(160_84%_39%/0.1)] text-[hsl(160_84%_39%)]' 
            : 'bg-[hsl(0_84%_60%/0.1)] text-[hsl(0_84%_60%)]'
        }`}>
          {change}
        </span>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center p-4 bg-[hsl(168_100%_50%/0.03)] border border-[hsl(168_100%_50%/0.1)] rounded-xl transition-all duration-300 hover:bg-[hsl(168_100%_50%/0.06)] hover:translate-x-1">
          <span className="text-[hsl(219_14%_63%)] text-sm">{subLabel}</span>
          <span className="text-xl font-semibold font-mono">
            {subValue} {subCurrency && <span className="text-[hsl(168_100%_50%)] font-semibold">{subCurrency}</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

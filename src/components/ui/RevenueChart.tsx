import { useState, useEffect, useRef } from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const chartData = {
  '7d': [
    { name: 'Mon', value: 2340 },
    { name: 'Tue', value: 2890 },
    { name: 'Wed', value: 2567 },
    { name: 'Thu', value: 3125 },
    { name: 'Fri', value: 2847 },
    { name: 'Sat', value: 3456 },
    { name: 'Sun', value: 3100 },
  ],
  '30d': [
    { name: 'Week 1', value: 18432 },
    { name: 'Week 2', value: 21567 },
    { name: 'Week 3', value: 19876 },
    { name: 'Week 4', value: 22345 },
  ],
  '90d': [
    { name: 'Month 1', value: 76234 },
    { name: 'Month 2', value: 82145 },
    { name: 'Month 3', value: 89123 },
  ],
  '1y': [
    { name: 'Jan', value: 45000 },
    { name: 'Feb', value: 52000 },
    { name: 'Mar', value: 58000 },
    { name: 'Apr', value: 64000 },
    { name: 'May', value: 71000 },
    { name: 'Jun', value: 76234 },
    { name: 'Jul', value: 82000 },
    { name: 'Aug', value: 89123 },
    { name: 'Sep', value: 95000 },
    { name: 'Oct', value: 102000 },
    { name: 'Nov', value: 108000 },
    { name: 'Dec', value: 115000 },
  ],
};

type Period = '7d' | '30d' | '90d' | '1y';

const RevenueChart = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('7d');
  const periods: Period[] = ['7d', '30d', '90d', '1y'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[hsl(225_22%_9%/0.95)] border border-[hsl(168_100%_50%/0.3)] rounded-lg px-4 py-3">
          <p className="text-[hsl(219_14%_63%)] text-sm">{label}</p>
          <p className="text-white font-semibold font-mono">
            {payload[0].value.toLocaleString()} USDT
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card hover-glow col-span-full">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(219_14%_63%)]">
          Revenue Analytics
        </span>
        <div className="flex gap-2">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`px-6 py-4 bg-transparent border-none font-semibold cursor-pointer transition-all duration-300 border-b-2 ${
                activePeriod === period
                  ? 'text-[hsl(168_100%_50%)] border-b-[hsl(168_100%_50%)]'
                  : 'text-[hsl(219_14%_63%)] border-b-transparent hover:text-white'
              }`}
            >
              {period.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData[activePeriod]}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(168, 100%, 50%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(168, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              stroke="hsl(219, 14%, 63%)"
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(219, 14%, 63%)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(168, 100%, 50%)"
              strokeWidth={3}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;

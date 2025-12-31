import Navigation from '@/components/ui/Navigation';
import Header from '@/components/ui/Header';
import StatsCard from '@/components/ui/StatsCard';
import WalletStateCard from '@/components/ui/WalletStateCard';
import StakingCard from '@/components/ui/StakingCard';
import RevenueChart from '@/components/ui/RevenueChart';
import RewardsManagement from '@/components/ui/RewardsManagement';
import TransactionHistory from '@/components/ui/TransactionHistory';
import Leaderboard from '@/components/ui/Leaderboard';
import APYCalculator from '@/components/ui/APYCalculator';
import StakingProgress from '@/components/ui/StakingProgress';
import NetworkStats from '@/components/ui/NetworkStats';
import ExternalDAppRevenue from '@/components/ui/ExternalDAppRevenue';
import StakingRules from '@/components/ui/StakingRules';
import Footer from '@/components/ui/Footer';

const Index = () => {
  return (
    <>
      <div className="background-gradient"></div>
      
      <div className="container">
        <Navigation />
        <Header />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up-delay">
          <StatsCard
            title="Total Stakers"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            value="1,247"
            label="Active Participants"
            change="↑ 8.2%"
            isPositive={true}
            subLabel="Active KOLS"
            subValue="71,632"
          />
          <StatsCard
            title="Today's Revenue"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            }
            value="2,847"
            currency="USDT"
            label="Daily Distribution"
            change="↓ 2.1%"
            isPositive={false}
            subLabel="Yesterday"
            subValue="3,125"
            subCurrency="USDT"
          />
          <StatsCard
            title="Weekly Revenue"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>
            }
            value="18,432"
            currency="USDT"
            label="This Week"
            change="↑ 12.4%"
            isPositive={true}
            subLabel="This Month"
            subValue="76,234"
            subCurrency="USDT"
          />
          <StatsCard
            title="Total Rewards"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            }
            value="542,891"
            currency="USDT"
            label="Total Distributed"
            change="↑ 156.7%"
            isPositive={true}
            subLabel="Insurance Pool"
            subValue="100"
            subCurrency="USDT"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-fade-in-up-delay-2 main-grid">
          <WalletStateCard />
          <StakingCard />
        </div>

        {/* Revenue Chart */}
        <div className="mb-8">
          <RevenueChart />
        </div>

        {/* Rewards Management */}
        <div className="mb-8">
          <RewardsManagement />
        </div>

        {/* Transaction History & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 main-grid">
          <TransactionHistory />
          <Leaderboard />
        </div>

        {/* APY Calculator */}
        <div className="mb-8">
          <APYCalculator />
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 main-grid">
          <StakingProgress />
          <NetworkStats />
        </div>

        {/* External DApp Revenue */}
        <ExternalDAppRevenue />

        {/* Staking Rules */}
        <StakingRules />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;

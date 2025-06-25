import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp
} from 'lucide-react';

const DashboardOverview: React.FC = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '1,234',
      change: '+12%',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Orders',
      value: '856',
      change: '+8%',
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Shopkeepers',
      value: '42',
      change: '+3%',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Revenue',
      value: '₹12,345',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#301814]">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here&#39;s what’s happening with your store.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="bg-[#FFF0ED] text-[#301814] rounded-[25px] shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#301814]">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ₹{stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ₹{stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#301814]">{stat.value}</div>
                <p className="text-xs text-green-600 font-medium">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#FFF0ED] text-[#301814] rounded-[25px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#301814]">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-[#FEF3F0] rounded-[20px]"
                >
                  <div>
                    <p className="font-medium text-[#301814]">Order #{1000 + i}</p>
                    <p className="text-sm text-gray-600">Customer {i}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#301814]">
                      ₹{((Math.random() * 100 + 20).toFixed(2))}
                    </p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#FFF0ED] text-[#301814] rounded-[25px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#301814]">Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Laptop', 'Smartphone', 'Headphones', 'Tablet', 'Camera'].map((product, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-[#FEF3F0] rounded-[20px]"
                >
                  <div>
                    <p className="font-medium text-[#301814]">{product}</p>
                    <p className="text-sm text-gray-600">
                      {Math.floor(Math.random() * 50 + 10)} sold
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#301814]">
                      ₹{((Math.random() * 500 + 100).toFixed(2))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;

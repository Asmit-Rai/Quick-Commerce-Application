import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Package, User } from 'lucide-react';

interface Order {
  id: string;
  buyerName: string;
  items: string[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery: string;
}

const OrdersPage: React.FC = () => {
  const orders: Order[] = [
    {
      id: 'Order-001',
      buyerName: 'Rajesh Kumar',
      items: ['Samsung Galaxy S23', 'Mobile Cover'],
      totalAmount: 79999,
      status: 'delivered',
      orderDate: '2024-01-20',
      estimatedDelivery: '2024-01-25'
    },
    {
      id: 'Order-002',
      buyerName: 'Priya Sharma',
      items: ['Dell Inspiron Laptop', 'Wireless Mouse'],
      totalAmount: 65999,
      status: 'shipped',
      orderDate: '2024-01-21',
      estimatedDelivery: '2024-01-26'
    },
    {
      id: 'Order-003',
      buyerName: 'Amit Verma',
      items: ['Organic Rice', 'Cooking Oil'],
      totalAmount: 1200,
      status: 'processing',
      orderDate: '2024-01-22',
      estimatedDelivery: '2024-01-24'
    },
    {
      id: 'Order-004',
      buyerName: 'Anjali Gupta',
      items: ['Bluetooth Headphones'],
      totalAmount: 2999,
      status: 'pending',
      orderDate: '2024-01-22',
      estimatedDelivery: '2024-01-27'
    },
    {
      id: 'Order-005',
      buyerName: 'Ravi Patel',
      items: ['Stationery Set', 'Notebook'],
      totalAmount: 450,
      status: 'cancelled',
      orderDate: '2024-01-19',
      estimatedDelivery: '2024-01-24'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const statusCounts = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
  };

  return (
    <div className="space-y-6 bg-[#FFF0ED] min-h-screen p-6 rounded-lg" >
      <div>
        <h1 className="text-3xl font-bold text-[#301814]">Orders</h1>
        <p className="text-[#301814a3] mt-2">Track and manage customer orders</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(statusCounts).map(([key, count]) => (
          <Card key={key} className="bg-[#FEF3F0] rounded-[25px] shadow-lg">
            <CardContent className="p-4 text-center">
              <div className={`text-2xl font-bold ${key === 'cancelled' ? 'text-red-600' : 'text-[#301814]'}`}>
                {count}
              </div>
              <div className="text-sm text-[#301814a3] capitalize">{key}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-[#FEF3F0] rounded-[25px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#301814]">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className={`rounded-[25px] p-4 transition-colors ${
                  order.status === 'pending' || order.status === 'processing'
                } shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="font-medium text-[#301814]">{order.id}</div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-xl font-bold text-[#301814]">
                    ₹{order.totalAmount}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-[#301814a3]">
                    <User className="h-4 w-4" />
                    <span>{order.buyerName}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-[#301814a3]">
                    <Package className="h-4 w-4" />
                    <span>{order.items.join(', ')}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-[#301814a3]">
                    <Calendar className="h-4 w-4" />
                    <span>Ordered: {new Date(order.orderDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {order.status !== 'delivered' && order.status !== 'cancelled' && (
                  <div className="mt-2 text-sm text-[#30181488]">
                    Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersPage;
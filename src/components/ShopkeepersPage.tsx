import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, Store } from 'lucide-react';

interface Shopkeeper {
  id: string;
  name: string;
  shopName: string;
  phone: string;
  city: string;
  status: 'active' | 'inactive';
  joinedDate: string;
}

const ShopkeepersPage: React.FC = () => {
  const shopkeepers: Shopkeeper[] = [
    { id: '1', name: 'Rajesh Kumar', shopName: 'Kumar Electronics', phone: '+91 98765-43210', city: 'Delhi', status: 'active', joinedDate: '2023-01-15' },
    { id: '2', name: 'Priya Sharma', shopName: 'Fresh Mart', phone: '+91 87654-32109', city: 'Mumbai', status: 'active', joinedDate: '2023-02-20' },
    { id: '3', name: 'Amit Verma', shopName: 'Tech World', phone: '+91 76543-21098', city: 'Bangalore', status: 'active', joinedDate: '2023-03-10' },
    { id: '4', name: 'Anjali Gupta', shopName: 'Fashion Hub', phone: '+91 65432-10987', city: 'Kolkata', status: 'inactive', joinedDate: '2023-04-05' },
    { id: '5', name: 'Ravi Patel', shopName: 'Book Paradise', phone: '+91 54321-09876', city: 'Ahmedabad', status: 'active', joinedDate: '2023-05-12' },
  ];

  return (
    <div className="space-y-6 bg-[#FFF0ED] p-6 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-[#301814]">Shopkeepers</h1>
        <p className="text-[#301814]/70 mt-2">View and manage registered shopkeepers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopkeepers.map((shopkeeper) => (
          <Card
            key={shopkeeper.id}
            className="bg-[#FEF3F0] rounded-[25px] shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-[#301814]">{shopkeeper.name}</CardTitle>
                <Badge
                  variant={shopkeeper.status === 'active' ? 'default' : 'secondary'}
                  className={shopkeeper.status === 'inactive' ? 'bg-gray-300 text-gray-800' : 'bg-[#F35E44] text-white'}
                >
                  {shopkeeper.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-[#301814]">
              <div className="flex items-center space-x-2 text-sm text-[#301814]/80">
                <Store className="h-4 w-4" />
                <span>{shopkeeper.shopName}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-[#301814]/80">
                <Phone className="h-4 w-4" />
                <span>{shopkeeper.phone}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-[#301814]/80">
                <MapPin className="h-4 w-4" />
                <span>{shopkeeper.city}</span>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopkeepersPage;

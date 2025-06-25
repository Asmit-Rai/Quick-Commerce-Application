import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import ProductModal from './ProductModal';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive';
  description: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const mockProducts: Product[] = [
      { id: '1', name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: 25, status: 'active', description: 'High-performance laptop' },
      { id: '2', name: 'Smartphone X', category: 'Electronics', price: 899, stock: 50, status: 'active', description: 'Latest smartphone model' },
      { id: '3', name: 'Coffee Beans', category: 'Food', price: 15, stock: 100, status: 'active', description: 'Premium coffee beans' },
      { id: '4', name: 'Wireless Headphones', category: 'Electronics', price: 199, stock: 0, status: 'inactive', description: 'Noise-canceling headphones' },
      { id: '5', name: 'Organic Milk', category: 'Food', price: 5, stock: 75, status: 'active', description: 'Fresh organic milk' },
    ];
    setProducts(mockProducts);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [products, debouncedSearchTerm]);

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
    };
    setProducts([...products, newProduct]);
    toast({
      title: "Product Added",
      description: "New product has been added successfully.",
    });
  };

  const handleEditProduct = (productData: Omit<Product, 'id'>) => {
    if (editingProduct) {
      setProducts(products.map(p =>
        p.id === editingProduct.id ? { ...productData, id: editingProduct.id } : p
      ));
      toast({
        title: "Product Updated",
        description: "Product has been updated successfully.",
      });
    }
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Product Deleted",
      description: "Product has been deleted successfully.",
    });
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 bg-[#FFF0ED] p-6 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#301814]">Products</h1>
          <p className="text-[#301814]/70 mt-2">Manage your product inventory</p>
        </div>
        <Button onClick={openAddModal} className="bg-[#F35E44] text-white rounded-full hover:bg-[#D94C32]">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card className="bg-[#FEF3F0] rounded-[25px] shadow-lg h-[calc(100vh-200px)] overflow-hidden">
        <CardHeader className="flex items-center space-x-2">
          <Search className="h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md bg-white text-black"
          />
        </CardHeader>
        <CardContent className="h-full overflow-hidden">
          <div className="h-full overflow-y-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-[#301814]">Product Name</th>
                  <th className="text-left py-3 px-4 font-medium text-[#301814]">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-[#301814]">Price</th>
                  <th className="text-left py-3 px-4 font-medium text-[#301814]">Stock</th>
                  <th className="text-left py-3 px-4 font-medium text-[#301814]">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-[#301814]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-[#F9EDD1] transition-colors">
                    <td className="py-3 px-4 text-black">{product.name}</td>
                    <td className="py-3 px-4 text-black">
                      <Badge className="bg-[#F35E44] text-white">{product.category}</Badge>
                    </td>
                    <td className="py-3 px-4 text-black">${product.price}</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-[#F35E44] text-white">{product.stock}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className="bg-[#F35E44] text-white">{product.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditModal(product)}
                          className="rounded-full bg-[#F35E44] text-white hover:bg-[#d94c32]"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="rounded-full bg-[#F35E44] text-white hover:bg-[#d94c32]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No products found matching your search.
            </div>
          )}
        </CardContent>
      </Card>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={editingProduct ? handleEditProduct : handleAddProduct}
        product={editingProduct}
      />
    </div>
  );
};

export default ProductsPage;
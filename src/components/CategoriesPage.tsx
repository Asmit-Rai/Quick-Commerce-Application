import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Category {
  id: string;
  name: string;
  description: string;
}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const mockCategories: Category[] = [
      {
        id: "1",
        name: "Electronics",
        description: "Electronic devices and gadgets",
      },
      { id: "2", name: "Food", description: "Food items and groceries" },
      { id: "3", name: "Clothing", description: "Apparel and fashion items" },
      {
        id: "4",
        name: "Books",
        description: "Books and educational materials",
      },
    ];
    setCategories(mockCategories);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      setCategories(
        categories.map((cat) =>
          cat.id === editingId
            ? { ...cat, name: formData.name, description: formData.description }
            : cat
        )
      );
      toast({
        title: "Category Updated",
        description: "Category has been updated successfully.",
      });
      setEditingId(null);
    } else {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
      };
      setCategories([...categories, newCategory]);
      toast({
        title: "Category Added",
        description: "New category has been added successfully.",
      });
    }

    setFormData({ name: "", description: "" });
  };

  const handleEdit = (category: Category) => {
    setFormData({ name: category.name, description: category.description });
    setEditingId(category.id);
  };

  const handleDelete = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    toast({
      title: "Category Deleted",
      description: "Category has been deleted successfully.",
    });
  };

  const handleCancel = () => {
    setFormData({ name: "", description: "" });
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        <p className="text-gray-600 mt-2">Manage product categories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 bg-[#FFF0ED] text-[#301814] rounded-[25px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#301814]">
              {editingId ? "Edit Category" : "Add New Category"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2 ">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="h-50"
                  
                />
              </div>

              <div className="flex space-x-2">
                <Button
                  type="submit"
                  className="text-white bg-[#F35E44] hover:bg-[#D94C32] rounded-full shadow-lg flex items-center justify-center"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  {editingId ? "Update" : "Add"} Category
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 bg-[#FFF0ED] text-[#301814] rounded-[25px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#301814]">All Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-4 bg-[#FEF3F0] rounded-[25px] shadow-lg hover:bg-[#F9EDD1] transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-[#301814]">
                      {category.name}
                    </h3>
                    <p className="text-sm text-[#5a2f2b]">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                     size="sm"
                     className="bg-[#F35E44] text-white rounded-full hover:bg-[#D94C32]"
                      onClick={() => handleEdit(category)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                  className="bg-[#F35E44] text-white rounded-full hover:bg-[#D94C32]"
                      size="sm"
                      onClick={() => handleDelete(category.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {categories.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No categories found. Add your first category!
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategoriesPage;

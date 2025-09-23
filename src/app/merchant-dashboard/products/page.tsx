import { Button } from "@/components/ui/button"
import { ProductsToolbar } from "@/components/products/products-toolbar"
import { ProductsTable } from "@/components/products/products-table"

export default function ProductsPage() {
  // Sample product data matching the specification
  const productData = [
    {
      id: "prod_123",
      imageUrl: "/blue-t-shirt.png",
      title: "Handcrafted Leather Messenger Bag",
      sku: "LMB-BRN-01",
      status: "Active",
      inventory: 32,
      price: 4500.0,
    },
    {
      id: "prod_124",
      imageUrl: "/red-ceramic-mug.jpg",
      title: "Blue T-shirt, Large",
      sku: "TSH-BLU-L",
      status: "Active",
      inventory: 4, // Low stock example
      price: 1500.0,
    },
    {
      id: "prod_125",
      imageUrl: "/black-hoodie.png",
      title: "Stainless Steel Water Bottle",
      sku: "WB-STL-500",
      status: "Draft",
      inventory: 150,
      price: 800.0,
    },
    {
      id: "prod_126",
      imageUrl: "/green-baseball-cap.jpg",
      title: "Organic Cotton Hoodie",
      sku: "HOD-ORG-M",
      status: "Active",
      inventory: 2, // Low stock
      price: 3200.0,
    },
    {
      id: "prod_127",
      imageUrl: "/white-sneakers.png",
      title: "Wireless Bluetooth Headphones",
      sku: "WBH-BLK-01",
      status: "Archived",
      inventory: 0,
      price: 2800.0,
    },
  ]

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Page Header and Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Products</h1>
        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
          + Add Product
        </Button>
      </div>

      {/* The ProductsToolbar component contains search and filter controls */}
      <ProductsToolbar />

      {/* Main Content: The Products Table */}
      <ProductsTable data={productData} />
    </div>
  )
}

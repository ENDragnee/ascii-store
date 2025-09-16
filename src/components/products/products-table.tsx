"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link, MoreHorizontal, Edit, Copy, Eye, Archive } from "lucide-react"
import { ShareLinkModal } from "./share-link-modal"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  imageUrl: string
  title: string
  sku: string
  status: "Active" | "Draft" | "Archived"
  inventory: number
  price: number
}

interface ProductsTableProps {
  data: Product[]
}

export function ProductsTable({ data }: ProductsTableProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(data.map((product) => product.id))
    } else {
      setSelectedProducts([])
    }
  }

  const handleSelectProduct = (productId: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, productId])
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    }
  }

  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "Draft":
        return (
          <Badge variant="secondary" className="bg-slate-100 text-slate-600">
            Draft
          </Badge>
        )
      case "Archived":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Archived</Badge>
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ET", {
      style: "currency",
      currency: "ETB",
      minimumFractionDigits: 2,
    }).format(price)
  }

  const handleGetLink = (product: Product) => {
    setSelectedProduct(product)
    setShareModalOpen(true)
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Bulk Actions Header */}
      {selectedProducts.length > 0 && (
        <div className="bg-cyan-50 border-b border-cyan-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-cyan-900">
              {selectedProducts.length} product{selectedProducts.length > 1 ? "s" : ""} selected
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-cyan-300 text-cyan-700 bg-transparent">
                <Edit className="h-4 w-4 mr-2" />
                Edit Selected ({selectedProducts.length})
              </Button>
              <Button variant="outline" size="sm" className="border-cyan-300 text-cyan-700 bg-transparent">
                <Archive className="h-4 w-4 mr-2" />
                Archive Selected
              </Button>
              <Button variant="outline" size="sm" className="border-cyan-300 text-cyan-700 bg-transparent">
                Export to CSV
              </Button>
            </div>
          </div>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="w-12">
              <Checkbox checked={selectedProducts.length === data.length} onCheckedChange={handleSelectAll} />
            </TableHead>
            <TableHead className="font-semibold text-slate-700">Product</TableHead>
            <TableHead className="font-semibold text-slate-700">Status</TableHead>
            <TableHead className="font-semibold text-slate-700">Inventory</TableHead>
            <TableHead className="font-semibold text-slate-700">Price</TableHead>
            <TableHead className="font-semibold text-slate-700 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id} className="hover:bg-slate-50">
              <TableCell>
                <Checkbox
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{product.title}</div>
                    <div className="text-sm text-slate-500">{product.sku}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(product.status)}</TableCell>
              <TableCell>
                <span className={cn("font-medium", product.inventory < 5 ? "text-red-600" : "text-slate-900")}>
                  {product.inventory}
                </span>
                {product.inventory < 5 && product.inventory > 0 && (
                  <span className="text-xs text-red-500 ml-1">(Low)</span>
                )}
                {product.inventory === 0 && <span className="text-xs text-red-500 ml-1">(Out of stock)</span>}
              </TableCell>
              <TableCell className="font-medium text-slate-900">{formatPrice(product.price)}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleGetLink(product)}
                    className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Get Link
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Public Page
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Archive className="h-4 w-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ShareLinkModal open={shareModalOpen} onOpenChange={setShareModalOpen} product={selectedProduct} />
    </div>
  )
}

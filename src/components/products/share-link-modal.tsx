"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Download, Check } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface Product {
  id: string
  imageUrl: string
  title: string
  sku: string
  status: "Active" | "Draft" | "Archived"
  inventory: number
  price: number
}

interface ShareLinkModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
}

export function ShareLinkModal({ open, onOpenChange, product }: ShareLinkModalProps) {
  const [copied, setCopied] = useState(false)
  const [utmSource, setUtmSource] = useState("")
  const [utmMedium, setUtmMedium] = useState("")
  const [utmCampaign, setUtmCampaign] = useState("")

  if (!product) return null

  const baseUrl = "your.platform.com"
  const shortLink = `${baseUrl}/p/${product.id.slice(-7)}`

  // Build UTM parameters
  const utmParams = new URLSearchParams()
  if (utmSource) utmParams.append("utm_source", utmSource)
  if (utmMedium) utmParams.append("utm_medium", utmMedium)
  if (utmCampaign) utmParams.append("utm_campaign", utmCampaign)

  const fullLink = utmParams.toString() ? `${shortLink}?${utmParams.toString()}` : shortLink

  const sampleCaption = `🔥 Check out this amazing ${product.title}! 

Perfect for anyone looking for quality and style. Get yours now for just ${new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    minimumFractionDigits: 2,
  }).format(product.price)}

${fullLink}

#shopping #quality #style`

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const downloadQR = () => {
    const svg = document.getElementById("qr-code")
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new Image()

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)

        const pngFile = canvas.toDataURL("image/png")
        const downloadLink = document.createElement("a")
        downloadLink.download = `${product.sku}-qr-code.png`
        downloadLink.href = pngFile
        downloadLink.click()
      }

      img.src = "data:image/svg+xml;base64," + btoa(svgData)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-slate-900">Share Product: {product.title}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Left Side: QR Code */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-block p-4 bg-white border-2 border-slate-200 rounded-lg">
                <QRCodeSVG id="qr-code" value={fullLink} size={200} level="M" includeMargin={true} />
              </div>
            </div>
            <Button onClick={downloadQR} variant="outline" className="w-full border-slate-300 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download PNG
            </Button>
          </div>

          {/* Right Side: Link and Social Media */}
          <div className="space-y-6">
            {/* Payment Link */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Short Payment Link</Label>
              <div className="flex gap-2">
                <Input value={fullLink} readOnly className="font-mono text-sm border-slate-300" />
                <Button
                  onClick={() => copyToClipboard(fullLink)}
                  variant="outline"
                  size="sm"
                  className="border-slate-300"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Social Media Caption */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Social Media Caption</Label>
              <Textarea value={sampleCaption} readOnly rows={8} className="text-sm border-slate-300 resize-none" />
              <Button
                onClick={() => copyToClipboard(sampleCaption)}
                variant="outline"
                size="sm"
                className="border-slate-300"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Caption
              </Button>
            </div>

            {/* UTM Parameters */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <Label className="text-sm font-medium text-slate-700">UTM Tracking (Optional)</Label>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <Label className="text-xs text-slate-600">Source</Label>
                  <Input
                    placeholder="e.g., instagram, facebook, email"
                    value={utmSource}
                    onChange={(e) => setUtmSource(e.target.value)}
                    className="text-sm border-slate-300"
                  />
                </div>
                <div>
                  <Label className="text-xs text-slate-600">Medium</Label>
                  <Input
                    placeholder="e.g., social, email, cpc"
                    value={utmMedium}
                    onChange={(e) => setUtmMedium(e.target.value)}
                    className="text-sm border-slate-300"
                  />
                </div>
                <div>
                  <Label className="text-xs text-slate-600">Campaign</Label>
                  <Input
                    placeholder="e.g., summer_sale, product_launch"
                    value={utmCampaign}
                    onChange={(e) => setUtmCampaign(e.target.value)}
                    className="text-sm border-slate-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

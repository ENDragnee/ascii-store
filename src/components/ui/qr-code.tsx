"use client"

import { QRCodeSVG } from "qrcode.react"

interface QRCodeProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
  includeMargin?: boolean
  id?: string
}

export function QRCode({ value, size = 128, level = "M", includeMargin = false, id }: QRCodeProps) {
  return <QRCodeSVG id={id} value={value} size={size} level={level} includeMargin={includeMargin} />
}

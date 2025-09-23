"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PackageIcon, WalletIcon } from "@/components/ui/simple-icons"

function LayoutDashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5v4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 5v4" />
    </svg>
  )
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h2m0 0v4a2 2 0 002 2h2a2 2 0 002-2v-4m8 0V9a2 2 0 00-2 2v7.01"
      />
    </svg>
  )
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  )
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
      />
    </svg>
  )
}

function AlertTriangleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function HelpCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

const navigation = [
  { name: "Dashboard", icon: LayoutDashboardIcon, href: "/merchant-dashboard" },
  { name: "Products", icon: PackageIcon, href: "/merchant-dashboard/products" },
  { name: "Payment Links", icon: LinkIcon, href: "/merchant-dashboard/payment-links" },
  { name: "Orders", icon: ShoppingCartIcon, href: "/merchant-dashboard/orders" },
  { name: "Inventory", icon: BoxIcon, href: "/merchant-dashboard/inventory" },
  { name: "Payouts", icon: WalletIcon, href: "/merchant-dashboard/payouts" },
  { name: "Disputes", icon: AlertTriangleIcon, href: "/merchant-dashboard/disputes" },
  { name: "Team", icon: UsersIcon, href: "/merchant-dashboard/team" },
  { name: "Settings", icon: SettingsIcon, href: "/merchant-dashboard/settings" },
  { name: "Help", icon: HelpCircleIcon, href: "/merchant-dashboard/help" },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile hamburger - will be handled by header component */}

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileOpen(false)} />
      )}

       <div className={cn(
          "fixed lg:sticky top-0 left-0 h-screen bg-surface border-r border-border shadow-card transition-all duration-300 ease-in-out z-30",
          isCollapsed ? "w-[72px]" : "w-[280px]",
          "lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div
            className={cn(
              "flex items-center border-b border-border",
              isCollapsed ? "px-4 py-4 justify-center" : "px-6 py-4",
            )}
          >
            {isCollapsed ? (
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">MS</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">MS</span>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">`{process.env.NEXT_PUBLIC_PROJECT_NAME}`</h2>
                  <p className="text-xs text-muted-foreground">Welcome user</p>
                </div>
              </div>
            )}
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const isCurrent = pathname === item.href
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileOpen(false)}>
                  <div className="relative">
                    {isCurrent && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                    )}
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-normal rounded-full h-10 transition-all duration-150",
                        isCollapsed ? "px-3" : "px-4 pl-6",
                        isCurrent
                          ? "bg-primary/5 text-primary hover:bg-primary/10"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <item.icon className={cn("h-4 w-4 stroke-[1.5]", isCollapsed ? "" : "mr-3")} />
                      {!isCollapsed && item.name}
                    </Button>
                  </div>
                </Link>
              )
            })}
          </nav>

          <div className="border-t border-border p-4">
            <Button
              variant="ghost"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(
                "w-full justify-start font-normal rounded-full h-10 text-muted-foreground hover:bg-muted hover:text-foreground",
                isCollapsed ? "px-3 justify-center" : "px-4",
              )}
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronLeftIcon
                className={cn(
                  "h-4 w-4 stroke-[1.5] transition-transform",
                  isCollapsed ? "rotate-180" : "",
                  !isCollapsed && "mr-3",
                )}
              />
              {!isCollapsed && "Collapse"}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

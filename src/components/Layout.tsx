import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {  
  Home,
  Plus,
  Calendar,
  Bell,
  Wrench,
  Menu
} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface LayoutProps {
  children: ReactNode
}

const navigation = [
  { name: 'Demandes', href: '/', icon: Home },
  { name: 'Nouvelle demande', href: '/nouvelle-demande', icon: Plus },
  { name: 'Agenda', href: '/agenda', icon: Calendar },
]

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const NavItems = () => (
    <>
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.href
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Icon className="h-4 w-4" />
            {item.name}
          </Link>
        )
      })}
    </>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex items-center gap-2 px-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <Wrench className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="font-semibold">RépaFast</span>
                    </div>
                    <nav className="flex flex-col gap-1">
                      <NavItems />
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Wrench className="h-4 w-4 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  RépaFast
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium">
                AG
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden md:flex w-64 border-r bg-white/50 backdrop-blur-sm">
          <div className="flex flex-col w-full p-4">
            <nav className="flex flex-col gap-1">
              <NavItems />
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
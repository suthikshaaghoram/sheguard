
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bell, Home, MapPin, Settings, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const mainNavLinks = [
  { to: '/', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
  { to: '/monitoring', label: 'Monitoring', icon: <User className="h-5 w-5" /> },
  { to: '/analytics', label: 'Analytics', icon: <MapPin className="h-5 w-5" /> },
  { to: '/alerts', label: 'Alerts', icon: <Bell className="h-5 w-5" /> },
  { to: '/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
];

export default function AppLayout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-safety-primary to-purple-500 border-b border-gray-200 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white hover:bg-white/20"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Bell className="h-4 w-4 text-safety-primary" />
              </div>
              <span className="font-bold text-lg text-white hidden sm:inline">
                SheGuard
              </span>
              <span className="font-bold text-lg text-white sm:hidden">
                SG
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">Help</Button>
            <Button size="sm" className="bg-white text-safety-primary hover:bg-white/90">
              <User className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar Navigation - Desktop */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
          <div className="p-4 border-b border-gray-100">
            <div className="text-lg font-bold text-safety-primary">SheGuard</div>
            <div className="text-xs text-gray-500">Women Safety Analytics</div>
          </div>
          <nav className="p-4 space-y-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === link.to
                    ? "bg-gradient-to-r from-safety-primary to-purple-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
        
        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu}>
            <div className="w-64 h-full bg-white p-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-safety-primary flex items-center justify-center">
                    <Bell className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-lg text-safety-dark">SheGuard</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="space-y-1">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={toggleMenu}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors",
                      location.pathname === link.to
                        ? "bg-gradient-to-r from-safety-primary to-purple-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-safety-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { logout } from "@/hooks/useAuth";
import { BarChart3, Package, Handshake, ShoppingCart, Home, LogOut } from "lucide-react";
import logo from "@/assets/logos/logo.png";

const AdminNavbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/admin", label: "Overview", icon: Home },
    { path: "/admin/products", label: "Products", icon: Package },
    { path: "/admin/partners", label: "Partners", icon: Handshake },
    { path: "/admin/orders", label: "Orders", icon: ShoppingCart },
    { path: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="9T7 Racing" className="h-8 w-auto" />
            <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center gap-2 ${
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Logout Button */}
          <Button variant="destructive" size="sm" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

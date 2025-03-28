
import { Link } from "react-router-dom";
import { Home, BarChart2, Users, FileText, Settings, Clipboard, CalendarClock, LogOut } from "lucide-react";
import Logo from "@/components/Logo";

const DashboardSidebar = () => {
  const navItems = [
    { name: "Overview", icon: <Home className="w-5 h-5" />, path: "/dashboard" },
    { name: "Sales", icon: <BarChart2 className="w-5 h-5" />, path: "/dashboard/sales" },
    { name: "Team", icon: <Users className="w-5 h-5" />, path: "/dashboard/team" },
    { name: "Bids", icon: <Clipboard className="w-5 h-5" />, path: "/dashboard/bids" },
    { name: "Training", icon: <CalendarClock className="w-5 h-5" />, path: "/dashboard/training" },
    { name: "Reports", icon: <FileText className="w-5 h-5" />, path: "/dashboard/reports" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, path: "/dashboard/settings" },
  ];

  return (
    <aside className="fixed hidden md:flex flex-col w-64 h-screen pt-20 bg-white border-r">
      <div className="px-4 py-6">
        <div className="mb-8">
          <Logo variant="default" size="md" />
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-primary-100 hover:text-primary group ${
                item.name === "Overview" ? "bg-primary-100 text-primary font-medium" : ""
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t">
        <Link
          to="/"
          className="flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="w-5 h-5" />
          <span className="ml-3">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

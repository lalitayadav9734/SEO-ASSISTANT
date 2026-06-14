import Link from "next/link";
import { 
  LayoutDashboard, 
  Search, 
  FileText, 
  Bot, 
  Network, 
  History, 
  Settings, 
  Sparkles,
  LogOut
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Keywords", href: "/dashboard/keywords", icon: Search },
    { name: "Meta Generator", href: "/dashboard/meta", icon: FileText },
    { name: "Robots.txt", href: "/dashboard/robots", icon: Bot },
    { name: "Sitemap", href: "/dashboard/sitemap", icon: Network },
    { name: "History", href: "/dashboard/history", icon: History },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#fafafa] text-gray-900 antialiased selection:bg-black selection:text-white">
      
      {/* PERSISTENT SIDEBAR COMPONENT */}
      <aside className="w-64 bg-black text-neutral-400 border-r border-neutral-900 sticky top-0 h-screen p-4 flex flex-col justify-between z-40 shrink-0">
        <div className="space-y-6">
          
          {/* Brand Logo Header */}
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="h-7 w-7 bg-white rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-black" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">SEO Assistant</span>
          </div>

          {/* Navigation Links Area */}
          <nav className="space-y-1 flex flex-col">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-neutral-400 hover:text-white hover:bg-neutral-900 group"
                >
                  <Icon className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action / Identity Footer Layout */}
        <div className="border-t border-neutral-900 pt-4">
          <Link href="/" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-neutral-500 hover:text-red-400 hover:bg-red-950/20 transition-all group">
            <LogOut className="h-4 w-4 text-neutral-600 group-hover:text-red-400 transition-colors" />
            Disconnect Node
          </Link>
        </div>
      </aside>

      {/* PRIMARY VIEWS WRAPPER LAYOUT */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto min-w-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
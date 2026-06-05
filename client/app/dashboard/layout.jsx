import Link from "next/link";

export default function DashboardLayout({ children }) {
  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Keywords",
      href: "/dashboard/keywords",
    },
    {
      name: "Meta Generator",
      href: "/dashboard/meta",
    },
    {
      name: "Robots.txt",
      href: "/dashboard/robots",
    },
    {
      name: "Sitemap",
      href: "/dashboard/sitemap",
    },
    {
      name: "History",
      href: "/dashboard/history",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          SEO Assistant
        </h1>

        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="p-3 rounded-lg hover:bg-gray-800 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-slate-100 p-8">
        {children}
      </main>
    </div>
  );
}
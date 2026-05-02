import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PanelTopDashed, MapPin, Tags, BookDown, Settings } from "lucide-react";
import { GrHomeRounded } from "react-icons/gr";

const DashLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState(["Employee"]);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleMenu = (menuName) => {
    setExpandedMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((i) => i !== menuName)
        : [...prev, menuName]
    );
  };

  const menuItems = [
    { name: "Inventory", icon: PanelTopDashed, path: "/dashboard/inventory" },
    { name: "Locations", icon: MapPin, path: "/dashboard/location" },
    { name: "Labels", icon: Tags, path: "#" },
    { name: "Reports", icon: BookDown, path: "#" },
    { name: "Settings", icon: Settings, path: "#" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r transition-all duration-300 z-30 ${
          isSidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="h-16 flex items-center px-6 font-semibold text-gray-800 border-b gap-2">
          <div className="w-8 h-8 rounded-[10px] bg-blue-600 flex items-center justify-center text-white text-[12px]">
            <GrHomeRounded />
          </div>
          <div>
            <p className="text-[#0F172A] text-lg">Home Inventory</p>
            <p className="text-[#64748B] text-[12px]">Manage your items</p>
          </div>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedMenus.includes(item.name);

            const isActive =
              item.path === pathname ||
              (item.hasSubmenu &&
                item.submenu?.some((sub) => pathname === sub.path));

            return (
              <div key={item.name}>
                <button
                  onClick={() =>
                    item.hasSubmenu
                      ? toggleMenu(item.name)
                      : item.path && navigate(item.path)
                  }
                  className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition
                    ${
                      isActive
                        ? "bg-[#EFF6FF] font-medium text-[#3B82F6]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <Icon
                    size={18}
                    className={`${
                      isActive ? "text-[#3B82F6]" : "text-gray-400"
                    }`}
                  />
                  <span className="flex-1 text-left">{item.name}</span>
                </button>
              </div>
            );
          })}
        </nav>
      </aside>

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* <header className="h-16 bg-white border-b flex items-center px-4 fixed w-full z-20">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 mr-4"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <h1 className="text-lg font-semibold text-gray-800">
            Good Afternoon
          </h1>
        </header> */}

        {/* <div className="pt-16 p-6">
          <Outlet />
        </div> */}
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashLayout;

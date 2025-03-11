import { useState, ReactNode, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { technologies } from "../../data/mockdata";
import { useRouter } from "next/router";

const SidebarLayout = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const location = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter technologies based on search
  const filteredTechnologies = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setCollapsed(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={cn(
          "h-screen transition-all duration-300 ease-in-out flex flex-col sticky top-0 shadow-md z-10",
          "bg-card border-r",
          collapsed ? "w-[70px]" : "w-[280px]"
        )}
      >
        {/* Sidebar header */}
        <div className="p-4 border-b flex justify-between items-center">
          {!collapsed && (
            <p className="font-medium text-lg text-black tracking-tight">
              Technologies
            </p>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-full hover:bg-secondary text-primary flex items-center justify-center"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Search box */}
        {!collapsed && (
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-black pl-9 pr-3 py-2 bg-secondary/50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        )}

        {/* Technologies list */}
        <div className="flex-1 overflow-auto py-2 scrollbar-none">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              onClick={() => {
                router.push({
                  pathname: "/qna/technology",
                  query: { techId: tech?.id },
                });
              }}
              className={cn(
                "flex items-center gap-3 px-4 py-3 my-0.5 mx-1 hover:cursor-pointer rounded-lg transition-colors",
                location.asPath === `/technology/${tech.id}`
                  ? "bg-primary/10 font-medium"
                  : "hover:bg-secondary",
                collapsed && "justify-center"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center text-black rounded-lg text-lg",
                  collapsed ? "w-10 h-10" : "w-9 h-9"
                )}
                style={{ backgroundColor: `${tech.color}20` }}
              >
                {tech.icon}
              </div>
              {!collapsed && (
                <div className="flex-1">
                  <p className="line-clamp-1 text-black">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {tech.questionCount} questions
                  </p>
                </div>
              )}
            </div>
          ))}

          {!collapsed && filteredTechnologies.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-muted-foreground text-sm">
                No technologies found
              </p>
            </div>
          )}
        </div>

        {/* Sidebar footer */}
        {!collapsed && (
          <div className="p-4 border-t text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} dlabss_</p>
            <p className="mt-1">Prepare smarter, not harder</p>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default SidebarLayout;

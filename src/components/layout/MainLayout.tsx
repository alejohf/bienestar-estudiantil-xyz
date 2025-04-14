
import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TopBar } from "./TopBar";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Get current page title based on route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/") return "Dashboard";
    if (path === "/students") return "Registro de Estudiantes";
    if (path === "/assessments") return "Evaluaciones Psicológicas";
    if (path === "/incidents") return "Registro de Incidentes";
    if (path === "/reports") return "Reportes";
    if (path === "/login") return "Iniciar Sesión";
    return "Bienestar Estudiantil";
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider defaultCollapsed={false}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopBar title={getPageTitle()} />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
          <footer className="py-4 px-6 text-center text-sm text-gray-500 border-t">
            © {new Date().getFullYear()} Institución XYZ - Sistema de Bienestar Estudiantil
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}

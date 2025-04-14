
import { 
  BarChartBig, 
  BadgeAlert, 
  Users, 
  ClipboardList, 
  Settings,
  LogOut,
  BrainCircuit
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Menu items
const mainItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChartBig,
  },
  {
    title: "Estudiantes",
    url: "/students",
    icon: Users,
  },
  {
    title: "Evaluaciones",
    url: "/assessments",
    icon: BrainCircuit,
  },
  {
    title: "Incidentes",
    url: "/incidents",
    icon: BadgeAlert,
  },
  {
    title: "Reportes",
    url: "/reports",
    icon: ClipboardList,
  },
];

const settingsItems = [
  {
    title: "Configuración",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200">
      <SidebarHeader className="py-5 flex items-center px-5 border-b">
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9 bg-blue-400">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-blue-500 text-white">XYZ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm">Bienestar</span>
            <span className="text-xs text-muted-foreground">Institución XYZ</span>
          </div>
        </div>
        <SidebarTrigger className="ml-auto h-8 w-8" />
      </SidebarHeader>
      
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex gap-2">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Sistema</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex gap-2">
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t pt-4 px-4">
        <Link to="/login" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sidebar-accent transition-colors">
          <LogOut size={18} />
          <span>Cerrar Sesión</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}

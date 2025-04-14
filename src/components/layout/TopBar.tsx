
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b px-6 py-3 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-blue-700">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Buscar estudiante..." 
            className="pl-10 w-64"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-auto">
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium">Alerta: Evaluación</span>
                    <span className="text-xs text-gray-500">Hace 10 min</span>
                  </div>
                  <p className="text-sm text-gray-600">Ana García (10B) muestra indicadores de riesgo en PHQ-9</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium">Incidente: Médico</span>
                    <span className="text-xs text-gray-500">Hace 1 hora</span>
                  </div>
                  <p className="text-sm text-gray-600">Carlos Mendoza (8A) reportó episodio de asma durante clase de educación física</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <span className="font-medium">Recordatorio</span>
                    <span className="text-xs text-gray-500">Hace 3 horas</span>
                  </div>
                  <p className="text-sm text-gray-600">Evaluaciones pendientes para grado 9C</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary">
              Ver todas las notificaciones
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-10 flex items-center gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-blue-600 text-white">DP</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline">Dr. Pérez</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuración</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar Sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

import { Settings, LogOut } from "lucide-react";

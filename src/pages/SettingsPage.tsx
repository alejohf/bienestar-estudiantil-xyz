
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  User, 
  Lock, 
  Bell, 
  Users, 
  Shield, 
  Database,
  Save,
  Check
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function SettingsPage() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Configuración guardada",
        description: "Los cambios han sido aplicados correctamente",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <Settings className="mr-2 h-5 w-5" />
            Configuración del Sistema
          </h2>
          <p className="text-muted-foreground">Personaliza el sistema según tus necesidades</p>
        </div>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Cuenta</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notificaciones</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Usuarios</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Seguridad</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">Sistema</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Cuenta</CardTitle>
              <CardDescription>
                Actualiza tu información personal y preferencias
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Perfil</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Dr. Juan Pérez" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="title">Cargo/Título</Label>
                    <Input id="title" placeholder="Psicólogo Escolar" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="juan.perez@institucion.edu" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="+52 555 123 4567" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferencias</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select defaultValue="es">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Seleccionar idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="theme">Tema</Label>
                    <Select defaultValue="light">
                      <SelectTrigger id="theme">
                        <SelectValue placeholder="Seleccionar tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Claro</SelectItem>
                        <SelectItem value="dark">Oscuro</SelectItem>
                        <SelectItem value="system">Sistema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dashboard-view">Vista Predeterminada de Dashboard</Label>
                    <p className="text-sm text-muted-foreground">
                      Elige qué información deseas ver al iniciar sesión
                    </p>
                  </div>
                  <Select defaultValue="summary">
                    <SelectTrigger id="dashboard-view" className="w-[180px]">
                      <SelectValue placeholder="Seleccionar vista" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Resumen General</SelectItem>
                      <SelectItem value="alerts">Alertas Activas</SelectItem>
                      <SelectItem value="assessments">Evaluaciones Pendientes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cambiar Contraseña</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña Actual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nueva Contraseña</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="mt-2">
                  <Lock className="mr-2 h-4 w-4" />
                  Actualizar Contraseña
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Guardando...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Preferencias de Notificaciones</CardTitle>
              <CardDescription>
                Configura cómo y cuándo recibir notificaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Canales de Notificación</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Correo Electrónico</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibir notificaciones vía email
                      </p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="desktop-notifications">Notificaciones en el Sistema</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar alertas dentro de la plataforma
                      </p>
                    </div>
                    <Switch id="desktop-notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">Mensajes SMS</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibir alertas urgentes vía SMS
                      </p>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Tipos de Notificaciones</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="incident-notifications">Incidentes</Label>
                      <p className="text-sm text-muted-foreground">
                        Nuevos incidentes registrados según nivel de severidad
                      </p>
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger id="incident-notifications" className="w-[140px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="high">Solo Altos</SelectItem>
                        <SelectItem value="medium">Medios y Altos</SelectItem>
                        <SelectItem value="none">Ninguno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="assessment-notifications">Evaluaciones</Label>
                      <p className="text-sm text-muted-foreground">
                        Alertas por resultados críticos en evaluaciones
                      </p>
                    </div>
                    <Select defaultValue="critical">
                      <SelectTrigger id="assessment-notifications" className="w-[140px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="critical">Solo Críticos</SelectItem>
                        <SelectItem value="none">Ninguno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reminder-notifications">Recordatorios</Label>
                      <p className="text-sm text-muted-foreground">
                        Recordatorios de evaluaciones programadas
                      </p>
                    </div>
                    <Select defaultValue="day">
                      <SelectTrigger id="reminder-notifications" className="w-[140px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">1 semana antes</SelectItem>
                        <SelectItem value="day">1 día antes</SelectItem>
                        <SelectItem value="hour">1 hora antes</SelectItem>
                        <SelectItem value="none">Desactivado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Horario de Notificaciones</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Hora de Inicio</Label>
                    <Input id="start-time" type="time" defaultValue="08:00" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="end-time">Hora de Fin</Label>
                    <Input id="end-time" type="time" defaultValue="18:00" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="weekdays-only" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                  <Label htmlFor="weekdays-only">Solo días laborables (Lunes a Viernes)</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Guardando...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Preferencias
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Usuarios</CardTitle>
              <CardDescription>
                Administra los usuarios que tienen acceso al sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Listado de Usuarios</h3>
                <Button size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Nuevo Usuario
                </Button>
              </div>
              
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuario
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rol
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Último Acceso
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">JP</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Dr. Juan Pérez</div>
                            <div className="text-sm text-gray-500">juan.perez@institucion.edu</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Administrador
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Activo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Hoy, 10:25 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">Editar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 font-medium">MR</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">María Rodríguez</div>
                            <div className="text-sm text-gray-500">maria.rodriguez@institucion.edu</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Psicólogo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Activo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Ayer, 15:40 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">Editar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 font-medium">CL</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Carlos López</div>
                            <div className="text-sm text-gray-500">carlos.lopez@institucion.edu</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Docente
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Activo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        12 Abr, 11:20 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">Editar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <span className="text-orange-600 font-medium">AM</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Ana Martínez</div>
                            <div className="text-sm text-gray-500">ana.martinez@institucion.edu</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                          Directivo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          Inactivo
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        5 Abr, 09:15 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">Editar</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Roles y Permisos</h3>
                
                <div className="rounded-md border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rol
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Descripción
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Usuarios
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-medium">Administrador</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">Acceso completo al sistema y configuración</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">1</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">Editar Permisos</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-medium">Psicólogo</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">Acceso a toda la información psicológica de estudiantes</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">2</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">Editar Permisos</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-medium">Docente</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">Acceso limitado a alertas médicas y notas básicas</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">12</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">Editar Permisos</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="font-medium">Directivo</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">Acceso a reportes y estadísticas agregadas</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm">3</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button variant="ghost" size="sm">Editar Permisos</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                Crear Nuevo Rol
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Guardando...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Seguridad</CardTitle>
              <CardDescription>
                Ajusta los parámetros de seguridad y privacidad del sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Acceso al Sistema</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Autenticación de Dos Factores</Label>
                      <p className="text-sm text-muted-foreground">
                        Requerir verificación adicional al iniciar sesión
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Tiempo de Sesión Inactiva</Label>
                      <p className="text-sm text-muted-foreground">
                        Cerrar sesión automáticamente tras periodo de inactividad
                      </p>
                    </div>
                    <Select defaultValue="30">
                      <SelectTrigger id="session-timeout" className="w-[120px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutos</SelectItem>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="120">2 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Bloqueo por Intentos Fallidos</Label>
                      <p className="text-sm text-muted-foreground">
                        Bloquear cuenta tras múltiples intentos fallidos
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number" 
                        className="w-16 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                        min="3"
                        max="10"
                        defaultValue="5"
                      />
                      <span className="text-sm text-muted-foreground">intentos</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Política de Contraseñas</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Longitud Mínima</Label>
                      <p className="text-sm text-muted-foreground">
                        Número mínimo de caracteres requeridos
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number" 
                        className="w-16 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                        min="6"
                        max="20"
                        defaultValue="8"
                      />
                      <span className="text-sm text-muted-foreground">caracteres</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Complejidad Requerida</Label>
                      <p className="text-sm text-muted-foreground">
                        Requisitos mínimos para contraseñas válidas
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="require-uppercase" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                        <Label htmlFor="require-uppercase" className="text-sm">Mayúsculas</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="require-number" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                        <Label htmlFor="require-number" className="text-sm">Números</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="require-special" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                        <Label htmlFor="require-special" className="text-sm">Caracteres especiales</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-expiry">Caducidad de Contraseña</Label>
                      <p className="text-sm text-muted-foreground">
                        Forzar cambio periódico de contraseña
                      </p>
                    </div>
                    <Select defaultValue="90">
                      <SelectTrigger id="password-expiry" className="w-[140px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 días</SelectItem>
                        <SelectItem value="60">60 días</SelectItem>
                        <SelectItem value="90">90 días</SelectItem>
                        <SelectItem value="180">180 días</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Privacidad de Datos</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Cifrado de Datos Sensibles</Label>
                      <p className="text-sm text-muted-foreground">
                        Cifrar información personal y evaluaciones psicológicas
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Registro de Acceso a Datos</Label>
                      <p className="text-sm text-muted-foreground">
                        Mantener logs de quién accede a qué información
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-retention">Política de Retención de Datos</Label>
                      <p className="text-sm text-muted-foreground">
                        Tiempo de conservación de datos históricos
                      </p>
                    </div>
                    <Select defaultValue="5years">
                      <SelectTrigger id="data-retention" className="w-[180px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1year">1 año después de graduación</SelectItem>
                        <SelectItem value="3years">3 años después de graduación</SelectItem>
                        <SelectItem value="5years">5 años después de graduación</SelectItem>
                        <SelectItem value="indefinite">Conservación indefinida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Guardando...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Configuración
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>Configuración del Sistema</CardTitle>
              <CardDescription>
                Ajustes generales y personalización de la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Información Institucional</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution-name">Nombre de la Institución</Label>
                    <Input id="institution-name" defaultValue="Institución XYZ" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="institution-code">Código Institucional</Label>
                    <Input id="institution-code" defaultValue="INS-XYZ-2025" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="institution-address">Dirección</Label>
                    <Input id="institution-address" defaultValue="Av. Principal #1234, Ciudad" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="institution-phone">Teléfono</Label>
                    <Input id="institution-phone" defaultValue="+52 555 123 4567" />
                  </div>
                  
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label htmlFor="institution-logo">Logo Institucional</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="h-16 w-16 rounded-md bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">XYZ</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Cambiar Logo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Estructura Académica</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="academic-year">Año Académico Actual</Label>
                      <p className="text-sm text-muted-foreground">
                        Periodo escolar vigente
                      </p>
                    </div>
                    <Input id="academic-year" className="w-[180px]" defaultValue="2024-2025" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="grade-structure">Estructura de Grados</Label>
                      <p className="text-sm text-muted-foreground">
                        Niveles académicos en la institución
                      </p>
                    </div>
                    <Select defaultValue="6-12">
                      <SelectTrigger id="grade-structure" className="w-[180px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="k-12">Kinder - 12</SelectItem>
                        <SelectItem value="1-12">1 - 12</SelectItem>
                        <SelectItem value="6-12">6 - 12</SelectItem>
                        <SelectItem value="custom">Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Secciones por Grado</Label>
                      <p className="text-sm text-muted-foreground">
                        Cantidad de grupos por nivel (A, B, C...)
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="number" 
                        className="w-16 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                        min="1"
                        max="10"
                        defaultValue="4"
                      />
                      <span className="text-sm text-muted-foreground">secciones</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Evaluaciones y Formularios</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="assessment-frequency">Frecuencia de Evaluaciones</Label>
                      <p className="text-sm text-muted-foreground">
                        Periodicidad recomendada para evaluaciones
                      </p>
                    </div>
                    <Select defaultValue="semester">
                      <SelectTrigger id="assessment-frequency" className="w-[180px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Mensual</SelectItem>
                        <SelectItem value="quarterly">Trimestral</SelectItem>
                        <SelectItem value="semester">Semestral</SelectItem>
                        <SelectItem value="yearly">Anual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="risk-thresholds">Umbrales de Riesgo</Label>
                      <p className="text-sm text-muted-foreground">
                        Ajustar niveles para alertas automáticas
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurar Umbrales
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Formularios Personalizados</Label>
                      <p className="text-sm text-muted-foreground">
                        Crear/editar formularios específicos
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Administrar Formularios
                    </Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Importación y Exportación</h3>
                
                <div className="flex flex-col space-y-4">
                  <Button variant="outline" className="justify-start">
                    <Database className="mr-2 h-4 w-4" />
                    Importar Datos de Estudiantes
                  </Button>
                  
                  <Button variant="outline" className="justify-start">
                    <Database className="mr-2 h-4 w-4" />
                    Respaldo Completo del Sistema
                  </Button>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-backup">Respaldo Automático</Label>
                      <p className="text-sm text-muted-foreground">
                        Programar respaldos periódicos
                      </p>
                    </div>
                    <Select defaultValue="weekly">
                      <SelectTrigger id="auto-backup" className="w-[180px]">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Diario</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                        <SelectItem value="monthly">Mensual</SelectItem>
                        <SelectItem value="never">Desactivado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Guardando...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

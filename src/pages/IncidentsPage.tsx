
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
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  BadgeAlert, 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Eye, 
  PlusCircle,
  Clock,
  AlertTriangle,
  Stethoscope,
  Brain
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function IncidentsPage() {
  const [isNewIncidentOpen, setIsNewIncidentOpen] = useState(false);
  const [incidentType, setIncidentType] = useState("medical");
  const [selectedIncident, setSelectedIncident] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Mock data for incidents
  const incidents = [
    {
      id: 1,
      student: "Carlos Mendoza",
      grade: "8A",
      date: "13 de Abril, 2025",
      time: "10:45 AM",
      type: "Médico",
      description: "Episodio de asma durante clase de educación física. Se requirió uso de inhalador.",
      severity: "Moderado",
      reportedBy: "Prof. Jiménez",
      location: "Cancha deportiva",
      notes: "El estudiante tenía su inhalador disponible. Se notificó a los padres como medida preventiva.",
      status: "Resuelto"
    },
    {
      id: 2,
      student: "Ana García",
      grade: "10B",
      date: "12 de Abril, 2025",
      time: "11:30 AM",
      type: "Emocional",
      description: "Crisis de ansiedad antes de exposición oral. Manifestó dificultad para respirar y temblor en manos.",
      severity: "Alto",
      reportedBy: "Prof. Martínez",
      location: "Aula 10B",
      notes: "Se requirió asistencia del psicólogo. Se recomienda seguimiento.",
      status: "En seguimiento"
    },
    {
      id: 3,
      student: "Lucía Morales",
      grade: "6C",
      date: "10 de Abril, 2025",
      time: "9:15 AM",
      type: "Médico",
      description: "Reacción alérgica leve, con enrojecimiento en brazos durante clase de artes.",
      severity: "Bajo",
      reportedBy: "Prof. Sánchez",
      location: "Salón de artes",
      notes: "Primera vez que presenta esta reacción. No se identificó el alérgeno específico.",
      status: "Resuelto"
    },
    {
      id: 4,
      student: "Diego Hernández",
      grade: "11A",
      date: "9 de Abril, 2025",
      time: "2:20 PM",
      type: "Conductual",
      description: "Conflicto verbal con otro estudiante durante el receso que requirió intervención docente.",
      severity: "Moderado",
      reportedBy: "Prof. Gómez",
      location: "Patio principal",
      notes: "Se realizó mediación entre los estudiantes. Se acordó seguimiento por parte del departamento de orientación.",
      status: "En seguimiento"
    },
    {
      id: 5,
      student: "Fernanda Ruiz",
      grade: "9D",
      date: "8 de Abril, 2025",
      time: "12:50 PM",
      type: "Emocional",
      description: "Episodio de llanto durante hora de almuerzo. Expresó sentirse abrumada por presión académica.",
      severity: "Moderado",
      reportedBy: "Prof. López",
      location: "Cafetería",
      notes: "Se recomendó cita con el psicólogo para valoración de estrés académico.",
      status: "Programado"
    },
    {
      id: 6,
      student: "Alejandro Díaz",
      grade: "7B",
      date: "7 de Abril, 2025",
      time: "8:30 AM",
      type: "Médico",
      description: "Dolor abdominal intenso que requirió atención en enfermería.",
      severity: "Alto",
      reportedBy: "Prof. Torres",
      location: "Aula 7B",
      notes: "Se contactó a los padres para recoger al estudiante. Se recomendó valoración médica.",
      status: "Resuelto"
    },
  ];

  const getSeverityClass = (severity: string) => {
    switch(severity) {
      case "Alto": return "status-red";
      case "Moderado": return "status-yellow";
      case "Bajo": return "status-green";
      default: return "status-green";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch(status) {
      case "Resuelto": return "bg-green-500 text-white";
      case "En seguimiento": return "bg-blue-500 text-white";
      case "Programado": return "bg-warning text-black";
      default: return "bg-gray-500 text-white";
    }
  };

  const getIncidentTypeIcon = (type: string) => {
    switch(type) {
      case "Médico": return <Stethoscope className="h-4 w-4 mr-1" />;
      case "Emocional": return <Brain className="h-4 w-4 mr-1" />;
      case "Conductual": return <AlertTriangle className="h-4 w-4 mr-1" />;
      default: return <AlertTriangle className="h-4 w-4 mr-1" />;
    }
  };

  const handleViewDetail = (incident: any) => {
    setSelectedIncident(incident);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <BadgeAlert className="mr-2 h-5 w-5" />
            Registro de Incidentes
          </h2>
          <p className="text-muted-foreground">Seguimiento de situaciones médicas y emocionales</p>
        </div>
        
        <Button onClick={() => setIsNewIncidentOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nuevo Incidente
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Buscar por estudiante, tipo o descripción..." 
                className="pl-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Periodo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="mb-4">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="medical">Médicos</TabsTrigger>
              <TabsTrigger value="emotional">Emocionales</TabsTrigger>
              <TabsTrigger value="behavioral">Conductuales</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Estudiante</TableHead>
                  <TableHead>Fecha/Hora</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Severidad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incidents.map((incident) => (
                  <TableRow key={incident.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{incident.student}</p>
                        <p className="text-sm text-gray-500">{incident.grade}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          {incident.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3.5 w-3.5 mr-1 text-gray-500" />
                          {incident.time}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="flex items-center w-fit" variant="outline">
                        {getIncidentTypeIcon(incident.type)}
                        {incident.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <p className="truncate" title={incident.description}>
                        {incident.description}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <span className={`status-indicator ${getSeverityClass(incident.severity)}`}></span>
                        {incident.severity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(incident.status)}>
                        {incident.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center"
                        onClick={() => handleViewDetail(incident)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Detalle
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            Mostrando {incidents.length} incidentes de los últimos 7 días
          </div>
        </CardFooter>
      </Card>

      {/* Incident Detail Dialog */}
      {selectedIncident && (
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Detalle del Incidente</DialogTitle>
              <DialogDescription>
                Información completa del registro
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Estudiante</h4>
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="font-medium">{selectedIncident.student}</p>
                      <p className="text-sm text-gray-500">{selectedIncident.grade}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Fecha y Hora</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                      <p>{selectedIncident.date}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <p>{selectedIncident.time}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Tipo de Incidente</h4>
                  <Badge className="flex items-center" variant="outline">
                    {getIncidentTypeIcon(selectedIncident.type)}
                    {selectedIncident.type}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Severidad</h4>
                  <div className="flex items-center gap-1.5">
                    <span className={`status-indicator ${getSeverityClass(selectedIncident.severity)}`}></span>
                    {selectedIncident.severity}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Estado</h4>
                  <Badge className={getStatusBadgeColor(selectedIncident.status)}>
                    {selectedIncident.status}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Reportado por</h4>
                  <p>{selectedIncident.reportedBy}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Ubicación</h4>
                  <p>{selectedIncident.location}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Descripción</h4>
                  <p className="text-sm border rounded-md p-3 bg-gray-50">
                    {selectedIncident.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Notas Adicionales</h4>
                  <p className="text-sm border rounded-md p-3 bg-gray-50">
                    {selectedIncident.notes}
                  </p>
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Actualizar Estado
                </Button>
                <Button variant="outline" size="sm">
                  Añadir Seguimiento
                </Button>
              </div>
              <Button variant="outline" onClick={() => setIsDetailOpen(false)}>
                Cerrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* New Incident Dialog */}
      <Dialog open={isNewIncidentOpen} onOpenChange={setIsNewIncidentOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Registrar Nuevo Incidente</DialogTitle>
            <DialogDescription>
              Complete la información del incidente. Los campos marcados con * son obligatorios.
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="medical" onValueChange={setIncidentType} className="mt-4">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="medical">Médico</TabsTrigger>
              <TabsTrigger value="emotional">Emocional</TabsTrigger>
              <TabsTrigger value="behavioral">Conductual</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <ScrollArea className="max-h-[60vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1">
              <div className="space-y-2">
                <Label htmlFor="student">Estudiante *</Label>
                <Select>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Seleccionar estudiante" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ana">Ana García (10B)</SelectItem>
                    <SelectItem value="carlos">Carlos Mendoza (8A)</SelectItem>
                    <SelectItem value="lucia">Lucía Morales (6C)</SelectItem>
                    <SelectItem value="diego">Diego Hernández (11A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Fecha y Hora *</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="date" id="date" defaultValue={new Date().toISOString().split('T')[0]} />
                  <Input type="time" id="time" defaultValue={new Date().toTimeString().split(' ')[0].substring(0, 5)} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación *</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Lugar del incidente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classroom">Aula</SelectItem>
                    <SelectItem value="playground">Patio</SelectItem>
                    <SelectItem value="gym">Gimnasio</SelectItem>
                    <SelectItem value="cafeteria">Cafetería</SelectItem>
                    <SelectItem value="hallway">Pasillo</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="severity">Severidad *</Label>
                <RadioGroup defaultValue="Bajo" className="flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="Bajo" id="severity-low" />
                    <Label htmlFor="severity-low" className="flex items-center gap-1">
                      <span className="status-indicator status-green"></span>
                      Bajo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="Moderado" id="severity-medium" />
                    <Label htmlFor="severity-medium" className="flex items-center gap-1">
                      <span className="status-indicator status-yellow"></span>
                      Moderado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="Alto" id="severity-high" />
                    <Label htmlFor="severity-high" className="flex items-center gap-1">
                      <span className="status-indicator status-red"></span>
                      Alto
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="col-span-1 md:col-span-2 space-y-2">
                <Label htmlFor="description">Descripción del Incidente *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describa detalladamente lo ocurrido" 
                  className="min-h-[80px]"
                />
              </div>
              
              {incidentType === "medical" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Síntomas Presentados</Label>
                    <Input id="symptoms" placeholder="Ej: dolor, dificultad respiratoria" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="action-taken">Acción Inmediata Tomada</Label>
                    <Input id="action-taken" placeholder="Ej: administración de medicamento" />
                  </div>
                  
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      ¿Se notificó a los padres?
                    </Label>
                  </div>
                </>
              )}
              
              {incidentType === "emotional" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="trigger">Factor Desencadenante</Label>
                    <Input id="trigger" placeholder="Situación que provocó la reacción" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="manifestation">Manifestaciones</Label>
                    <Input id="manifestation" placeholder="Ej: llanto, aislamiento" />
                  </div>
                  
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      ¿Requiere intervención del psicólogo?
                    </Label>
                  </div>
                </>
              )}
              
              {incidentType === "behavioral" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="behavior">Conducta Específica</Label>
                    <Input id="behavior" placeholder="Ej: agresión verbal, desobediencia" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="context">Contexto</Label>
                    <Input id="context" placeholder="Situación en la que ocurrió" />
                  </div>
                  
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      ¿Involucra a otros estudiantes?
                    </Label>
                  </div>
                </>
              )}
              
              <div className="col-span-1 md:col-span-2 space-y-2">
                <Label htmlFor="notes">Notas Adicionales</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Información complementaria relevante" 
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </ScrollArea>
          
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setIsNewIncidentOpen(false)}>Cancelar</Button>
            <Button>Guardar Incidente</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

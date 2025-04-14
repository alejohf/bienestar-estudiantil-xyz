
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Search, 
  UserPlus, 
  Filter, 
  Download, 
  MoreHorizontal,
  UserCircle,
  FileText,
  BadgeAlert
} from "lucide-react";

// Mock student data
const students = [
  {
    id: 1,
    name: "Ana María Gutiérrez",
    grade: "10B",
    age: 16,
    studentId: "2025001",
    medicalAlerts: ["Asma"],
    riskLevel: "Alto"
  },
  {
    id: 2,
    name: "Luis Eduardo Mendoza",
    grade: "8A",
    age: 14,
    studentId: "2025043",
    medicalAlerts: ["Alergia a maní"],
    riskLevel: "Bajo"
  },
  {
    id: 3,
    name: "Carla Patricia Herrera",
    grade: "9C",
    age: 15,
    studentId: "2025078",
    medicalAlerts: [],
    riskLevel: "Medio"
  },
  {
    id: 4,
    name: "Jorge Alberto Fuentes",
    grade: "12A",
    age: 18,
    studentId: "2025102",
    medicalAlerts: ["Diabetes tipo 1"],
    riskLevel: "Bajo"
  },
  {
    id: 5,
    name: "Daniela Montero Vásquez",
    grade: "11B",
    age: 17,
    studentId: "2025154",
    medicalAlerts: [],
    riskLevel: "Bajo"
  },
  {
    id: 6,
    name: "Alejandro José Soto",
    grade: "7C",
    age: 13,
    studentId: "2025211",
    medicalAlerts: ["Epilepsia"],
    riskLevel: "Medio"
  },
  {
    id: 7,
    name: "Mariela Sofía Delgado",
    grade: "10A",
    age: 16,
    studentId: "2025239",
    medicalAlerts: [],
    riskLevel: "Alto"
  },
  {
    id: 8,
    name: "Roberto Carlos Jiménez",
    grade: "8B",
    age: 14,
    studentId: "2025287",
    medicalAlerts: ["TDAH"],
    riskLevel: "Medio"
  },
];

const getRiskBadgeColor = (riskLevel: string) => {
  switch(riskLevel) {
    case "Alto": return "bg-danger text-white";
    case "Medio": return "bg-warning text-black";
    case "Bajo": return "bg-green-500 text-white";
    default: return "bg-blue-500 text-white";
  }
};

export function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isNewStudentOpen, setIsNewStudentOpen] = useState(false);

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    student.studentId.includes(searchQuery) ||
    student.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetail = (student: any) => {
    setSelectedStudent(student);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Directorio de Estudiantes
          </h2>
          <p className="text-muted-foreground">Gestión de información y seguimiento de estudiantes</p>
        </div>
        
        <Button onClick={() => setIsNewStudentOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Nuevo Estudiante
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Buscar por nombre, ID o grado..." 
                className="pl-8" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Estudiante</TableHead>
                  <TableHead>Grado</TableHead>
                  <TableHead>Edad</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Alertas</TableHead>
                  <TableHead>Nivel de Riesgo</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No se encontraron estudiantes con los criterios de búsqueda
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.grade}</TableCell>
                      <TableCell>{student.age}</TableCell>
                      <TableCell>{student.studentId}</TableCell>
                      <TableCell>
                        {student.medicalAlerts.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {student.medicalAlerts.map((alert, idx) => (
                              <Badge key={idx} variant="outline" className="bg-red-50 text-red-800 border-red-200">
                                {alert}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">Ninguna</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={getRiskBadgeColor(student.riskLevel)}>
                          {student.riskLevel}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleViewDetail(student)}>
                              <UserCircle className="mr-2 h-4 w-4" />
                              Ver Perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Historial de Evaluaciones
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BadgeAlert className="mr-2 h-4 w-4" />
                              Registro de Incidentes
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Student Detail Dialog */}
      {selectedStudent && (
        <Dialog open={isDetailOpen} onOpenChange={handleCloseDetail}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Información del Estudiante</DialogTitle>
              <DialogDescription>
                Perfil completo y seguimiento
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="medical">Historial Médico</TabsTrigger>
                <TabsTrigger value="psychological">Evaluaciones</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Nombre Completo</h4>
                      <p>{selectedStudent.name}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">ID Estudiantil</h4>
                      <p>{selectedStudent.studentId}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Grado</h4>
                      <p>{selectedStudent.grade}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Edad</h4>
                      <p>{selectedStudent.age} años</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Fecha de Nacimiento</h4>
                      <p>15 de Junio, 2009</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Dirección</h4>
                      <p>Calle Principal #123, Colonia Centro</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Contacto de Emergencia</h4>
                      <p>María Gutierrez (Madre) - 555-123-4567</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-muted-foreground">Situación Familiar</h4>
                      <p>Vive con ambos padres</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="medical" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Alertas Médicas</h4>
                    {selectedStudent.medicalAlerts.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedStudent.medicalAlerts.map((alert: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="bg-red-50 text-red-800 border-red-200 px-2 py-1">
                            {alert}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No se han registrado alertas médicas</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Condiciones Crónicas</h4>
                    <p className="text-muted-foreground">Asma (diagnosticada a los 8 años)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Medicamentos</h4>
                    <p className="text-muted-foreground">Inhalador de salbutamol según necesidad</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Historial de Incidentes</h4>
                    <div className="space-y-3">
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <p className="font-medium">Episodio de asma</p>
                          <p className="text-xs text-gray-500">12 de Febrero, 2025</p>
                        </div>
                        <p className="text-sm mt-1">Dificultad respiratoria durante clase de educación física. Se administró inhalador.</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <p className="font-medium">Episodio de asma</p>
                          <p className="text-xs text-gray-500">28 de Octubre, 2024</p>
                        </div>
                        <p className="text-sm mt-1">Episodio leve durante recreo. Se trasladó a enfermería para observación.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="psychological" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Nivel de Riesgo</h4>
                      <Badge className={getRiskBadgeColor(selectedStudent.riskLevel)}>
                        {selectedStudent.riskLevel}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Presenta indicadores que requieren seguimiento periódico. Última evaluación realizada el 05 de Marzo, 2025.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Resultados de Evaluaciones</h4>
                    <div className="space-y-3">
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <p className="font-medium">PHQ-9 (Depresión)</p>
                          <p className="text-xs text-gray-500">05 de Marzo, 2025</p>
                        </div>
                        <p className="text-sm mt-1">Puntaje: 14 (Depresión moderada)</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <p className="font-medium">GAD-7 (Ansiedad)</p>
                          <p className="text-xs text-gray-500">05 de Marzo, 2025</p>
                        </div>
                        <p className="text-sm mt-1">Puntaje: 12 (Ansiedad moderada)</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-peach-400 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <p className="font-medium">Escala de Autoestima</p>
                          <p className="text-xs text-gray-500">10 de Diciembre, 2024</p>
                        </div>
                        <p className="text-sm mt-1">Puntaje: 16 (Autoestima baja)</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                          <div className="bg-green-400 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Observaciones del Psicólogo</h4>
                    <p className="text-sm border rounded-md p-3">
                      La estudiante muestra signos de ansiedad social y dificultades de adaptación. 
                      Se recomienda seguimiento quincenal y valorar la posibilidad de iniciar terapia individual. 
                      Comunicación constante con padres de familia sobre estrategias de apoyo en casa.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDetail}>Cerrar</Button>
              <Button>Editar Información</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* New Student Dialog */}
      <Dialog open={isNewStudentOpen} onOpenChange={setIsNewStudentOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Registrar Nuevo Estudiante</DialogTitle>
            <DialogDescription>
              Complete la información del estudiante. Los campos marcados con * son obligatorios.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre Completo *
              </label>
              <Input id="name" placeholder="Nombre y apellidos" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="studentId" className="text-sm font-medium">
                ID Estudiantil *
              </label>
              <Input id="studentId" placeholder="ID institucional" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="dob" className="text-sm font-medium">
                Fecha de Nacimiento *
              </label>
              <Input id="dob" type="date" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="grade" className="text-sm font-medium">
                Grado *
              </label>
              <Input id="grade" placeholder="Ej: 10B" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Dirección
              </label>
              <Input id="address" placeholder="Calle, número, colonia" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="guardian" className="text-sm font-medium">
                Tutor Principal *
              </label>
              <Input id="guardian" placeholder="Nombre del padre/madre/tutor" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono de Contacto *
              </label>
              <Input id="phone" placeholder="Teléfono de emergencia" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Correo Electrónico
              </label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" />
            </div>
            
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label htmlFor="medical" className="text-sm font-medium">
                Condiciones Médicas Relevantes
              </label>
              <Input id="medical" placeholder="Asma, alergias, condiciones crónicas, etc." />
            </div>
            
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label htmlFor="family" className="text-sm font-medium">
                Situación Familiar
              </label>
              <Input id="family" placeholder="Estructura familiar, circunstancias especiales" />
            </div>
            
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label htmlFor="notes" className="text-sm font-medium">
                Observaciones Adicionales
              </label>
              <Input id="notes" placeholder="Información relevante adicional" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewStudentOpen(false)}>Cancelar</Button>
            <Button>Guardar Estudiante</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

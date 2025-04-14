
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
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  BarChart as BarChartIcon, 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  Users, 
  BadgeAlert,
  BarChart4,
  PieChart,
  LayoutGrid
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell
} from "recharts";

const riskByGradeData = [
  { grade: "6to", alto: 3, medio: 7, bajo: 15 },
  { grade: "7mo", alto: 5, medio: 10, bajo: 12 },
  { grade: "8vo", alto: 4, medio: 12, bajo: 9 },
  { grade: "9no", alto: 7, medio: 8, bajo: 14 },
  { grade: "10mo", alto: 6, medio: 9, bajo: 10 },
  { grade: "11mo", alto: 3, medio: 5, bajo: 16 },
  { grade: "12mo", alto: 4, medio: 6, bajo: 12 },
];

const incidentsTrendData = [
  { month: "Ene", médicos: 12, emocionales: 8, conductuales: 5 },
  { month: "Feb", médicos: 15, emocionales: 10, conductuales: 7 },
  { month: "Mar", médicos: 10, emocionales: 12, conductuales: 6 },
  { month: "Abr", médicos: 8, emocionales: 15, conductuales: 9 },
];

const assessmentResultsData = [
  { name: "PHQ-9", minimo: 45, leve: 28, moderado: 18, severo: 9 },
  { name: "GAD-7", minimo: 40, leve: 32, moderado: 20, severo: 8 },
  { name: "Autoestima", alto: 38, medio: 42, bajo: 20 },
];

const riskDistributionData = [
  { name: "Bajo Riesgo", value: 62, color: "#5EAD7D" },
  { name: "Riesgo Medio", value: 28, color: "#FFD369" },
  { name: "Alto Riesgo", value: 10, color: "#FF5A5A" },
];

const COLORS = ["#5EAD7D", "#FFD369", "#FF5A5A", "#4F96C8"];

export function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("trimester");
  const [selectedGrade, setSelectedGrade] = useState("all");

  const predefinedReports = [
    {
      title: "Distribución de Niveles de Riesgo",
      description: "Clasificación de estudiantes por nivel de riesgo psicológico",
      type: "chart",
      category: "psychological"
    },
    {
      title: "Tendencias de Incidentes",
      description: "Evolución mensual por tipo de incidente",
      type: "chart",
      category: "incidents"
    },
    {
      title: "Resultados de Evaluaciones",
      description: "Estadísticas de los cuestionarios aplicados",
      type: "chart",
      category: "assessments"
    },
    {
      title: "Informe de Alertas por Grado",
      description: "Detalle de alertas generadas por nivel académico",
      type: "report",
      category: "alerts"
    },
    {
      title: "Clima Escolar por Aula",
      description: "Indicadores de bienestar por sección",
      type: "report",
      category: "climate"
    },
    {
      title: "Seguimiento de Casos Críticos",
      description: "Estado de estudiantes en seguimiento especial",
      type: "report",
      category: "cases"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <BarChartIcon className="mr-2 h-5 w-5" />
            Reportes y Estadísticas
          </h2>
          <p className="text-muted-foreground">Análisis de datos agregados sobre bienestar estudiantil</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Último Mes</SelectItem>
              <SelectItem value="trimester">Último Trimestre</SelectItem>
              <SelectItem value="semester">Último Semestre</SelectItem>
              <SelectItem value="year">Año Académico</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">
            <LayoutGrid className="h-4 w-4 mr-2" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="students">
            <Users className="h-4 w-4 mr-2" />
            Estudiantes
          </TabsTrigger>
          <TabsTrigger value="incidents">
            <BadgeAlert className="h-4 w-4 mr-2" />
            Incidentes
          </TabsTrigger>
          <TabsTrigger value="assessments">
            <BarChart4 className="h-4 w-4 mr-2" />
            Evaluaciones
          </TabsTrigger>
          <TabsTrigger value="saved">
            <FileText className="h-4 w-4 mr-2" />
            Guardados
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Estudiantes</p>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold">1,248</h3>
                  <span className="text-xs text-green-500">+24</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Incidentes Registrados</p>
                  <BadgeAlert className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold">128</h3>
                  <span className="text-xs text-muted-foreground">Último Trimestre</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Evaluaciones Realizadas</p>
                  <BarChart4 className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold">386</h3>
                  <span className="text-xs text-muted-foreground">Último Trimestre</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Alertas Activas</p>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold">32</h3>
                  <span className="text-xs text-danger">+8</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Distribución de Riesgo por Grado</CardTitle>
                <CardDescription>
                  Niveles de riesgo psicológico identificados por grado académico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={riskByGradeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="grade" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="alto" name="Riesgo Alto" stackId="a" fill="#FF5A5A" />
                      <Bar dataKey="medio" name="Riesgo Medio" stackId="a" fill="#FFD369" />
                      <Bar dataKey="bajo" name="Riesgo Bajo" stackId="a" fill="#5EAD7D" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tendencia de Incidentes</CardTitle>
                <CardDescription>
                  Evolución de incidentes por categoría en los últimos meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={incidentsTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="médicos" name="Médicos" stroke="#4F96C8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="emocionales" name="Emocionales" stroke="#F9C096" />
                      <Line type="monotone" dataKey="conductuales" name="Conductuales" stroke="#5EAD7D" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución de Riesgo</CardTitle>
                <CardDescription>
                  Porcentaje de estudiantes por nivel de riesgo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={riskDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {riskDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Reportes de Estudiantes</h3>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filtrar por grado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los grados</SelectItem>
                  <SelectItem value="6">6to grado</SelectItem>
                  <SelectItem value="7">7mo grado</SelectItem>
                  <SelectItem value="8">8vo grado</SelectItem>
                  <SelectItem value="9">9no grado</SelectItem>
                  <SelectItem value="10">10mo grado</SelectItem>
                  <SelectItem value="11">11mo grado</SelectItem>
                  <SelectItem value="12">12mo grado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Distribución por Nivel de Riesgo</CardTitle>
              <CardDescription>
                Agrupación de estudiantes según semáforo de riesgo psicológico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={riskByGradeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="alto" name="Riesgo Alto" fill="#FF5A5A" />
                    <Bar dataKey="medio" name="Riesgo Medio" fill="#FFD369" />
                    <Bar dataKey="bajo" name="Riesgo Bajo" fill="#5EAD7D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Alertas de Salud Activas</CardTitle>
                <CardDescription>
                  Estudiantes con condiciones médicas relevantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-500">Asma</Badge>
                        <span className="text-sm text-muted-foreground">32 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-500">Alergias</Badge>
                        <span className="text-sm text-muted-foreground">48 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-500">Diabetes</Badge>
                        <span className="text-sm text-muted-foreground">8 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "3%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">3%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">TDAH</Badge>
                        <span className="text-sm text-muted-foreground">25 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "9%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">9%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-500">Epilepsia</Badge>
                        <span className="text-sm text-muted-foreground">5 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Situaciones Familiares Especiales</CardTitle>
                <CardDescription>
                  Contexto familiar relevante para el seguimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-500">Padres separados</Badge>
                        <span className="text-sm text-muted-foreground">87 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-500">Familia monoparental</Badge>
                        <span className="text-sm text-muted-foreground">45 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "17%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">17%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-500">Padres en el extranjero</Badge>
                        <span className="text-sm text-muted-foreground">28 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-500">Situación de orfandad</Badge>
                        <span className="text-sm text-muted-foreground">12 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "4%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">4%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">Familia extendida</Badge>
                        <span className="text-sm text-muted-foreground">35 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "13%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">13%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assessments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Resultados de Evaluaciones</h3>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Tipo de Evaluación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="phq9">PHQ-9</SelectItem>
                  <SelectItem value="gad7">GAD-7</SelectItem>
                  <SelectItem value="autoestima">Autoestima</SelectItem>
                  <SelectItem value="riesgo">Riesgo Psicosocial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Resultados por Nivel de Severidad</CardTitle>
              <CardDescription>
                Distribución de resultados de evaluaciones por categoría
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={assessmentResultsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="minimo" name="Mínimo/Ninguno" fill="#5EAD7D" />
                    <Bar dataKey="leve" name="Leve" fill="#4F96C8" />
                    <Bar dataKey="moderado" name="Moderado" fill="#FFD369" />
                    <Bar dataKey="severo" name="Severo" fill="#FF5A5A" />
                    <Bar dataKey="alto" name="Alto" fill="#5EAD7D" />
                    <Bar dataKey="medio" name="Medio" fill="#FFD369" />
                    <Bar dataKey="bajo" name="Bajo" fill="#FF5A5A" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>PHQ-9 (Depresión)</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">12.6</span>
                  <p className="text-sm text-muted-foreground">Puntaje promedio</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Mínimo (0-4)</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Leve (5-9)</span>
                    <span>28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Moderado (10-14)</span>
                    <span>18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "18%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Severo (15-27)</span>
                    <span>9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-danger h-2 rounded-full" style={{ width: "9%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GAD-7 (Ansiedad)</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">9.8</span>
                  <p className="text-sm text-muted-foreground">Puntaje promedio</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Mínimo (0-4)</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Leve (5-9)</span>
                    <span>32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Moderado (10-14)</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Severo (15-21)</span>
                    <span>8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-danger h-2 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Escala de Autoestima</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">25.4</span>
                  <p className="text-sm text-muted-foreground">Puntaje promedio</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Autoestima Alta (30-40)</span>
                    <span>38%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Autoestima Media (20-29)</span>
                    <span>42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Autoestima Baja (10-19)</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-danger h-2 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Estadísticas de Incidentes</h3>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Tipo de Incidente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="medical">Médicos</SelectItem>
                  <SelectItem value="emotional">Emocionales</SelectItem>
                  <SelectItem value="behavioral">Conductuales</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tendencia de Incidentes por Mes</CardTitle>
              <CardDescription>
                Evolución de frecuencia de incidentes registrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={incidentsTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="médicos" name="Médicos" stroke="#4F96C8" strokeWidth={2} />
                    <Line type="monotone" dataKey="emocionales" name="Emocionales" stroke="#F9C096" strokeWidth={2} />
                    <Line type="monotone" dataKey="conductuales" name="Conductuales" stroke="#5EAD7D" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Incidentes por Ubicación</CardTitle>
                <CardDescription>
                  Distribución por áreas de la institución
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Aulas</span>
                        <span className="text-sm text-muted-foreground">42 incidentes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Canchas Deportivas</span>
                        <span className="text-sm text-muted-foreground">35 incidentes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "27%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">27%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Recreo/Patio</span>
                        <span className="text-sm text-muted-foreground">28 incidentes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Cafetería</span>
                        <span className="text-sm text-muted-foreground">15 incidentes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Otros</span>
                        <span className="text-sm text-muted-foreground">9 incidentes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "7%" }}></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Incidentes por Severidad</CardTitle>
                <CardDescription>
                  Clasificación por nivel de gravedad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={[
                          { name: "Alto", value: 23, color: "#FF5A5A" },
                          { name: "Moderado", value: 45, color: "#FFD369" },
                          { name: "Bajo", value: 61, color: "#5EAD7D" },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[
                          { name: "Alto", value: 23, color: "#FF5A5A" },
                          { name: "Moderado", value: 45, color: "#FFD369" },
                          { name: "Bajo", value: 61, color: "#5EAD7D" },
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Reportes Guardados</h3>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Nuevo Reporte
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {predefinedReports.map((report, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{report.title}</CardTitle>
                    {report.type === "chart" ? 
                      <PieChart className="h-4 w-4 text-muted-foreground" /> : 
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    }
                  </div>
                  <CardDescription className="text-xs">{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="text-xs">
                      {report.category === "psychological" && "Psicológico"}
                      {report.category === "incidents" && "Incidentes"}
                      {report.category === "assessments" && "Evaluaciones"}
                      {report.category === "alerts" && "Alertas"}
                      {report.category === "climate" && "Clima Escolar"}
                      {report.category === "cases" && "Casos"}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Actualizado: 10 Abr 2025
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-3 w-3" />
                    Ver
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Exportar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

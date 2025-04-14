
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, Users, AlertTriangle, Brain, Activity } from "lucide-react";
import { 
  ResponsiveContainer, 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

export function DashboardPage() {
  // Mock data for charts
  const assessmentData = [
    { grade: "1ero", depresion: 5, ansiedad: 8, autoestima: 12 },
    { grade: "2doA", depresion: 8, ansiedad: 10, autoestima: 9 },
    { grade: "3roA", depresion: 6, ansiedad: 14, autoestima: 7 },
    { grade: "3roB", depresion: 12, ansiedad: 15, autoestima: 8 },
    { grade: "4toA", depresion: 9, ansiedad: 11, autoestima: 10 },
    { grade: "4toB", depresion: 7, ansiedad: 9, autoestima: 15 },
    { grade: "5to", depresion: 10, ansiedad: 12, autoestima: 11 },
  ];

  const incidentTypeData = [
    { name: "Médico", value: 35, color: "#4F96C8" },
    { name: "Emocional", value: 45, color: "#5EAD7D" },
    { name: "Conductual", value: 20, color: "#F9C096" },
  ];

  const riskLevelData = [
    { name: "Bajo", value: 65, color: "#5EAD7D" },
    { name: "Medio", value: 25, color: "#FFD369" },
    { name: "Alto", value: 10, color: "#FF5A5A" },
  ];

  const upcomingAssessments = [
    { grade: "10mo A", date: "15 de Abril, 2025", type: "PHQ-9" },
    { grade: "8vo C", date: "18 de Abril, 2025", type: "GAD-7" },
    { grade: "11mo B", date: "22 de Abril, 2025", type: "Autoestima" },
  ];

  const recentIncidents = [
    { 
      student: "Miguel Ángel López", 
      grade: "9A", 
      type: "Médico", 
      description: "Episodio de asma durante clase de educación física",
      severity: "Moderado",
      date: "13 de Abril, 2025"
    },
    { 
      student: "Ana Carolina Sánchez", 
      grade: "10B", 
      type: "Emocional", 
      description: "Crisis de ansiedad antes de examen",
      severity: "Alto",
      date: "12 de Abril, 2025"
    },
    { 
      student: "José Ramírez", 
      grade: "7C", 
      type: "Médico", 
      description: "Reacción alérgica leve durante clase de arte",
      severity: "Bajo",
      date: "10 de Abril, 2025"
    }
  ];

  const getSeverityClass = (severity: string) => {
    switch(severity) {
      case "Alto": return "status-red";
      case "Moderado": return "status-yellow";
      case "Bajo": return "status-green";
      default: return "status-green";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Estudiantes</p>
                <h3 className="text-2xl font-bold mt-1">1,248</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Evaluaciones Pendientes</p>
                <h3 className="text-2xl font-bold mt-1">26</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Brain className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Incidentes (Este Mes)</p>
                <h3 className="text-2xl font-bold mt-1">43</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-peach-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-peach-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Alertas de Riesgo</p>
                <h3 className="text-2xl font-bold mt-1">8</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-danger-light flex items-center justify-center">
                <Activity className="h-6 w-6 text-danger" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Indicadores por Grado</CardTitle>
            <CardDescription>
              Promedio de puntajes en evaluaciones por nivel académico
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={assessmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="grade" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="depresion" name="Depresión" fill="#4F96C8" />
                  <Bar dataKey="ansiedad" name="Ansiedad" fill="#F9C096" />
                  <Bar dataKey="autoestima" name="Autoestima" fill="#5EAD7D" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tipos de Incidentes</CardTitle>
            <CardDescription>
              Distribución por categoría en el último trimestre
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incidentTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {incidentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Niveles de Riesgo</CardTitle>
            <CardDescription>
              Distribución de población estudiantil por nivel de riesgo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskLevelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskLevelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Próximas Evaluaciones</CardTitle>
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAssessments.map((assessment, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{assessment.grade}</p>
                    <p className="text-sm text-muted-foreground">{assessment.type}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p>{assessment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Incidentes Recientes</CardTitle>
              <AlertTriangle className="h-5 w-5 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="flex justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`status-indicator ${getSeverityClass(incident.severity)}`}></span>
                      <p className="font-medium">{incident.student} <span className="text-sm font-normal text-gray-500">({incident.grade})</span></p>
                    </div>
                    <p className="text-sm mt-1">{incident.description}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="text-xs text-muted-foreground">{incident.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

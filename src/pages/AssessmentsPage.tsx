
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
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { BrainCircuit, CalendarDays, Clock, CheckCheck, AlertCircle } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

export function AssessmentsPage() {
  const [selectedTest, setSelectedTest] = useState("phq9");
  const [showTestForm, setShowTestForm] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  // Mock data for scheduled assessments
  const scheduledAssessments = [
    { grade: "10B", test: "PHQ-9", date: "15 de Abril, 2025", time: "10:00 AM", status: "Pendiente" },
    { grade: "8C", test: "GAD-7", date: "18 de Abril, 2025", time: "11:30 AM", status: "Pendiente" },
    { grade: "11A", test: "Autoestima", date: "22 de Abril, 2025", time: "09:15 AM", status: "Pendiente" },
    { grade: "9D", test: "PHQ-9", date: "24 de Abril, 2025", time: "02:00 PM", status: "Pendiente" },
  ];

  // Mock data for completed assessments
  const completedAssessments = [
    { grade: "12A", test: "PHQ-9", date: "10 de Abril, 2025", alertsCount: 3 },
    { grade: "7B", test: "GAD-7", date: "5 de Abril, 2025", alertsCount: 1 },
    { grade: "10C", test: "Autoestima", date: "2 de Abril, 2025", alertsCount: 2 },
    { grade: "8A", test: "PHQ-9", date: "28 de Marzo, 2025", alertsCount: 0 },
    { grade: "11B", test: "Riesgo Psicosocial", date: "25 de Marzo, 2025", alertsCount: 4 },
  ];

  // Mock data for select options
  const grades = ["7A", "7B", "8A", "8B", "9A", "9B", "10A", "10B", "11A", "11B", "12A", "12B"];
  const students = [
    "Ana López (10B)", 
    "Carlos Mendoza (10B)", 
    "Daniela Soto (10B)", 
    "Eduardo Flores (10B)",
    "Fernanda Ruiz (10B)"
  ];

  const renderTestForm = () => {
    switch(selectedTest) {
      case "phq9":
        return renderPHQ9Form();
      case "gad7":
        return renderGAD7Form();
      case "autoestima":
        return renderAutoestimaForm();
      default:
        return renderPHQ9Form();
    }
  };

  const renderPHQ9Form = () => {
    const questions = [
      "Poco interés o placer en hacer las cosas",
      "Se ha sentido decaído(a), deprimido(a), o sin esperanzas",
      "Dificultad para dormir o mantener el sueño, o dormir demasiado",
      "Sentirse cansado(a) o tener poca energía",
      "Falta de apetito o comer en exceso",
      "Sentirse mal sobre sí mismo(a) - o sentir que es un(a) fracasado(a) o que ha quedado mal con usted mismo(a) o con su familia",
      "Dificultad para concentrarse en cosas tales como leer el periódico o ver televisión",
      "Moverse o hablar tan lentamente que otras personas pudieran haberlo notado. O lo contrario - estar tan inquieto(a) o intranquilo(a) que se ha estado moviendo mucho más de lo normal",
      "Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera"
    ];
    
    return (
      <div className="space-y-6">
        <p className="text-gray-600">
          Durante las últimas 2 semanas, ¿con qué frecuencia ha sentido molestias por cualquiera de los siguientes problemas?
        </p>
        
        {questions.map((question, index) => (
          <div key={index} className="space-y-2">
            <p className="font-medium">{index + 1}. {question}</p>
            <RadioGroup defaultValue="0" className="flex space-x-1 sm:space-x-2">
              <div className="flex flex-col items-center">
                <RadioGroupItem value="0" id={`q${index}-0`} className="peer sr-only" />
                <Label htmlFor={`q${index}-0`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Nunca
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="1" id={`q${index}-1`} className="peer sr-only" />
                <Label htmlFor={`q${index}-1`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Varios días
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="2" id={`q${index}-2`} className="peer sr-only" />
                <Label htmlFor={`q${index}-2`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Más de la mitad de los días
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="3" id={`q${index}-3`} className="peer sr-only" />
                <Label htmlFor={`q${index}-3`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Casi todos los días
                </Label>
              </div>
            </RadioGroup>
            {index < questions.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    );
  };

  const renderGAD7Form = () => {
    const questions = [
      "Sentirse nervioso/a, ansioso/a, o con los nervios de punta",
      "No ser capaz de parar o controlar la preocupación",
      "Preocuparse demasiado sobre diferentes cosas",
      "Dificultad para relajarse",
      "Estar tan inquieto/a que es difícil permanecer sentado/a",
      "Sentirse fácilmente molesto/a o irritable",
      "Sentir miedo como si algo terrible pudiera pasar"
    ];
    
    return (
      <div className="space-y-6">
        <p className="text-gray-600">
          Durante las últimas 2 semanas, ¿con qué frecuencia ha sentido molestias por los siguientes problemas?
        </p>
        
        {questions.map((question, index) => (
          <div key={index} className="space-y-2">
            <p className="font-medium">{index + 1}. {question}</p>
            <RadioGroup defaultValue="0" className="flex space-x-1 sm:space-x-2">
              <div className="flex flex-col items-center">
                <RadioGroupItem value="0" id={`g${index}-0`} className="peer sr-only" />
                <Label htmlFor={`g${index}-0`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Nunca
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="1" id={`g${index}-1`} className="peer sr-only" />
                <Label htmlFor={`g${index}-1`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Varios días
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="2" id={`g${index}-2`} className="peer sr-only" />
                <Label htmlFor={`g${index}-2`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Más de la mitad de los días
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="3" id={`g${index}-3`} className="peer sr-only" />
                <Label htmlFor={`g${index}-3`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Casi todos los días
                </Label>
              </div>
            </RadioGroup>
            {index < questions.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    );
  };

  const renderAutoestimaForm = () => {
    const questions = [
      "Siento que soy una persona digna de aprecio, al menos en igual medida que los demás",
      "Estoy convencido de que tengo cualidades buenas",
      "Soy capaz de hacer las cosas tan bien como la mayoría de la gente",
      "Tengo una actitud positiva hacia mí mismo/a",
      "En general estoy satisfecho/a conmigo mismo/a",
      "Siento que no tengo mucho de lo que estar orgulloso/a",
      "En general, me inclino a pensar que soy un fracasado/a",
      "Me gustaría poder sentir más respeto por mí mismo/a",
      "Hay veces que realmente pienso que soy un/a inútil",
      "A veces creo que no soy bueno/a persona"
    ];
    
    return (
      <div className="space-y-6">
        <p className="text-gray-600">
          Por favor, indica tu grado de acuerdo con las siguientes afirmaciones:
        </p>
        
        {questions.map((question, index) => (
          <div key={index} className="space-y-2">
            <p className="font-medium">{index + 1}. {question}</p>
            <RadioGroup defaultValue="3" className="flex space-x-1 sm:space-x-2">
              <div className="flex flex-col items-center">
                <RadioGroupItem value="0" id={`a${index}-0`} className="peer sr-only" />
                <Label htmlFor={`a${index}-0`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Muy en desacuerdo
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="1" id={`a${index}-1`} className="peer sr-only" />
                <Label htmlFor={`a${index}-1`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  En desacuerdo
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="2" id={`a${index}-2`} className="peer sr-only" />
                <Label htmlFor={`a${index}-2`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  De acuerdo
                </Label>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="3" id={`a${index}-3`} className="peer sr-only" />
                <Label htmlFor={`a${index}-3`} className="text-xs sm:text-sm cursor-pointer rounded-md border border-gray-200 px-2 sm:px-3 py-1.5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground">
                  Muy de acuerdo
                </Label>
              </div>
            </RadioGroup>
            {index < questions.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <BrainCircuit className="mr-2 h-5 w-5" />
            Evaluaciones Psicológicas
          </h2>
          <p className="text-muted-foreground">Gestión y seguimiento de evaluaciones estandarizadas</p>
        </div>

        <Dialog open={showTestForm} onOpenChange={setShowTestForm}>
          <DialogTrigger asChild>
            <Button>Nueva Evaluación</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-screen overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Realizar Nueva Evaluación</DialogTitle>
              <DialogDescription>
                Seleccione el tipo de evaluación y al estudiante que desea evaluar
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="test-type">Tipo de Evaluación</Label>
                <Select value={selectedTest} onValueChange={setSelectedTest}>
                  <SelectTrigger id="test-type">
                    <SelectValue placeholder="Seleccionar evaluación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phq9">PHQ-9 (Depresión)</SelectItem>
                    <SelectItem value="gad7">GAD-7 (Ansiedad)</SelectItem>
                    <SelectItem value="autoestima">Escala de Autoestima</SelectItem>
                    <SelectItem value="riesgo">Cuestionario de Riesgo Psicosocial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grado</Label>
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Seleccionar grado" />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 col-span-1 md:col-span-2">
                <Label htmlFor="student">Estudiante</Label>
                <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Seleccionar estudiante" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student} value={student}>{student}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-6" />

            {renderTestForm()}

            <DialogFooter className="mt-6">
              <Button variant="outline" onClick={() => setShowTestForm(false)}>Cancelar</Button>
              <Button>Guardar Evaluación</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="scheduled" className="space-y-4">
        <TabsList>
          <TabsTrigger value="scheduled">Programadas</TabsTrigger>
          <TabsTrigger value="completed">Completadas</TabsTrigger>
          <TabsTrigger value="templates">Formularios</TabsTrigger>
        </TabsList>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Evaluaciones Programadas</CardTitle>
              <CardDescription>
                Próximas evaluaciones psicológicas agendadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grado</TableHead>
                    <TableHead>Evaluación</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduledAssessments.map((assessment, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{assessment.grade}</TableCell>
                      <TableCell>{assessment.test}</TableCell>
                      <TableCell className="flex items-center">
                        <CalendarDays className="mr-2 h-4 w-4 text-gray-500" />
                        {assessment.date}
                      </TableCell>
                      <TableCell className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500" />
                        {assessment.time}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                          {assessment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">Iniciar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Ver Calendario Completo</Button>
              <Button>Programar Nueva Evaluación</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Evaluaciones Completadas</CardTitle>
              <CardDescription>
                Historial de evaluaciones realizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grado</TableHead>
                    <TableHead>Evaluación</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Alertas</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedAssessments.map((assessment, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{assessment.grade}</TableCell>
                      <TableCell>{assessment.test}</TableCell>
                      <TableCell className="flex items-center">
                        <CheckCheck className="mr-2 h-4 w-4 text-green-600" />
                        {assessment.date}
                      </TableCell>
                      <TableCell>
                        {assessment.alertsCount > 0 ? (
                          <Badge className="bg-danger text-white flex items-center gap-1 w-fit">
                            <AlertCircle className="h-3 w-3" />
                            {assessment.alertsCount}
                          </Badge>
                        ) : (
                          <Badge className="bg-green-500 text-white w-fit">
                            Ninguna
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">Ver Resultados</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Exportar Resultados</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>PHQ-9</CardTitle>
              <CardDescription>
                Cuestionario de Salud del Paciente para depresión
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Evaluación rápida que mide la gravedad de los síntomas depresivos en adolescentes. Consta de 9 preguntas basadas en los criterios diagnósticos del DSM-V.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Ver Detalle</Button>
              <Button size="sm" onClick={() => {
                setSelectedTest("phq9");
                setShowTestForm(true);
              }}>Aplicar</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GAD-7</CardTitle>
              <CardDescription>
                Escala para Trastorno de Ansiedad Generalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Herramienta de detección de 7 ítems que mide la frecuencia e intensidad de los síntomas de ansiedad. Válida para adolescentes y adultos.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Ver Detalle</Button>
              <Button size="sm" onClick={() => {
                setSelectedTest("gad7");
                setShowTestForm(true);
              }}>Aplicar</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Escala de Autoestima</CardTitle>
              <CardDescription>
                Escala de Rosenberg adaptada para adolescentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Instrumento de 10 ítems que evalúa la autoestima global, abordando sentimientos generales de valía personal y auto-aceptación.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Ver Detalle</Button>
              <Button size="sm" onClick={() => {
                setSelectedTest("autoestima");
                setShowTestForm(true);
              }}>Aplicar</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Riesgo Psicosocial</CardTitle>
              <CardDescription>
                Cuestionario de factores de riesgo en el entorno
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Evalúa factores de riesgo como violencia familiar, consumo de sustancias, acoso escolar y otros determinantes que pueden afectar la salud mental.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Ver Detalle</Button>
              <Button size="sm" onClick={() => {
                setSelectedTest("riesgo");
                setShowTestForm(true);
              }}>Aplicar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

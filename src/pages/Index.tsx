
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  BarChartBig, 
  ShieldCheck, 
  Users, 
  BadgeAlert, 
  ArrowRight, 
  Lock,
  ClipboardList 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b sticky top-0 z-10">
        <div className="container max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <BrainCircuit className="h-8 w-8 text-blue-500 mr-2" />
            <div>
              <h1 className="font-bold text-xl text-blue-800">Bienestar Estudiantil</h1>
              <p className="text-xs text-gray-500">Institución XYZ</p>
            </div>
          </div>
          <Button onClick={() => navigate("/login")}>Iniciar Sesión</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
                Monitoreo Psicológico y de Salud Estudiantil
              </h1>
              <p className="text-xl text-gray-600">
                Plataforma integral para el seguimiento del bienestar emocional y físico de los estudiantes, con herramientas especializadas para psicólogos, docentes y directivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" onClick={() => navigate("/login")}>
                  Acceder al Sistema <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/login")}>
                  Solicitar Demo
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-xl border border-blue-100 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center space-y-2">
                <div className="bg-blue-100 rounded-full p-3">
                  <BrainCircuit className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="font-semibold">Evaluaciones Psicológicas</h3>
                <p className="text-sm text-gray-600">Formularios estandarizados con detección temprana</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center text-center space-y-2">
                <div className="bg-green-100 rounded-full p-3">
                  <BadgeAlert className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="font-semibold">Registro de Incidentes</h3>
                <p className="text-sm text-gray-600">Seguimiento de situaciones médicas y emocionales</p>
              </div>
              <div className="bg-peach-50 rounded-lg p-6 flex flex-col items-center text-center space-y-2">
                <div className="bg-peach-100 rounded-full p-3">
                  <Users className="h-8 w-8 text-peach-700" />
                </div>
                <h3 className="font-semibold">Perfiles de Estudiantes</h3>
                <p className="text-sm text-gray-600">Historial completo de seguimiento personal</p>
              </div>
              <div className="bg-warning-light rounded-lg p-6 flex flex-col items-center text-center space-y-2">
                <div className="bg-warning rounded-full p-3">
                  <BarChartBig className="h-8 w-8 text-warning-dark" />
                </div>
                <h3 className="font-semibold">Reportes Analíticos</h3>
                <p className="text-sm text-gray-600">Estadísticas e indicadores de clima escolar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Características Principales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solución integral para el monitoreo y seguimiento del bienestar estudiantil con herramientas especializadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Registro de Estudiantes</h3>
              <p className="text-gray-600">
                Integración con sistemas de matrícula, datos personales, historial médico y situación familiar relevante.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                  <BrainCircuit className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluación Psicológica</h3>
              <p className="text-gray-600">
                Formularios estandarizados (PHQ-9, GAD-7), evaluaciones periódicas y sistema de alertas por respuestas críticas.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                  <BadgeAlert className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Registro de Incidentes</h3>
              <p className="text-gray-600">
                Documentación de incidentes médicos, situaciones emocionales críticas y observaciones docentes, clasificados por gravedad.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                  <BarChartBig className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard Personalizado</h3>
              <p className="text-gray-600">
                Vistas específicas para docentes, psicólogos y administración con niveles de acceso diferenciados según rol.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                  <ClipboardList className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reportes y Estadísticas</h3>
              <p className="text-gray-600">
                Herramientas analíticas que permiten visualizar tendencias, patrones y métricas clave para la toma de decisiones.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                  <Lock className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacidad y Seguridad</h3>
              <p className="text-gray-600">
                Control de acceso basado en roles, protección de datos sensibles y cumplimiento de normativas de privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Diseñado para Cada Rol</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interfaz adaptada a las necesidades específicas de cada perfil de usuario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100">
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-semibold">Para Docentes</h3>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Alertas médicas inmediatas</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Situaciones emocionales relevantes</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Restricciones de actividades</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Registro de observaciones</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Más Información</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 transform scale-105">
              <div className="bg-blue-700 p-4 text-white">
                <h3 className="text-xl font-semibold">Para Psicólogos</h3>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Acceso completo a historial psicológico</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Tendencias por aula/grado</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Sistema de semáforo de riesgo emocional</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Herramientas para generar reportes</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Administración de evaluaciones</span>
                  </li>
                </ul>
                <Button className="w-full">Más Información</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100">
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-semibold">Para Administración</h3>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Estadísticas agregadas</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Reportes de frecuencia de incidentes</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Indicadores de clima escolar</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Configuración del sistema</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Más Información</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Comienza a Monitorear el Bienestar de tus Estudiantes</h2>
          <p className="text-xl mb-8 opacity-90">
            Solicita una demostración personalizada para conocer cómo nuestra plataforma puede adaptarse a las necesidades de tu institución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-blue-700 hover:bg-gray-100" onClick={() => navigate("/login")}>
              Iniciar Sesión
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700" onClick={() => navigate("/login")}>
              Solicitar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <BrainCircuit className="h-6 w-6 text-blue-400 mr-2" />
                <h3 className="font-bold text-white text-lg">Bienestar Estudiantil</h3>
              </div>
              <p className="text-sm">
                Plataforma integral para el monitoreo psicológico y de salud de estudiantes en instituciones educativas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Características</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Registro de Estudiantes</a></li>
                <li><a href="#" className="hover:text-white">Evaluaciones Psicológicas</a></li>
                <li><a href="#" className="hover:text-white">Registro de Incidentes</a></li>
                <li><a href="#" className="hover:text-white">Reportes y Estadísticas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentación</a></li>
                <li><a href="#" className="hover:text-white">Guías de Usuario</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Soporte Técnico</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Av. Principal #1234, Ciudad</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📞</span>
                  <span>+52 555 123 4567</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <span>info@institucion-xyz.edu</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Institución XYZ. Todos los derechos reservados.</p>
            <div className="flex mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-white">Privacidad</a>
              <a href="#" className="hover:text-white">Términos</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Zap, Shield, Heart, Target, CheckCircle, Star } from 'lucide-react';

export const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovación Tecnológica',
      description: 'Utilizamos equipos de última generación para garantizar la mejor experiencia audiovisual.',
    },
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Más de 500 eventos exitosos nos respaldan. Tu evento está en manos expertas.',
    },
    {
      icon: Heart,
      title: 'Pasión por la Excelencia',
      description: 'Cada proyecto es único. Nos dedicamos a superar las expectativas de nuestros clientes.',
    },
    {
      icon: Users,
      title: 'Equipo Profesional',
      description: 'Técnicos especializados y operadores certificados en cada servicio.',
    },
  ];

  const achievements = [
    { number: '500+', text: 'Eventos Realizados' },
    { number: '5', text: 'Años de Experiencia' },
    { number: '100%', text: 'Satisfacción del Cliente' },
    { number: '24/7', text: 'Soporte Técnico' },
  ];

  const services = [
    'Asesoramiento técnico personalizado',
    'Instalación y montaje profesional',
    'Operación durante el evento',
    'Soporte técnico 24/7',
    'Mantenimiento preventivo de equipos',
    'Diseño de shows personalizados',
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            ¿Quiénes Somos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas en tecnología audiovisual, comprometidos con transformar cada evento en una experiencia inolvidable
          </p>
        </div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Fundada en 2019 en el corazón de Formosa, <strong className="text-accent">Recova Rentals</strong> nació 
                  de la pasión por la tecnología audiovisual y el entretenimiento. Comenzamos como un pequeño 
                  emprendimiento familiar con la visión de democratizar el acceso a equipos profesionales 
                  de alta calidad en nuestra región.
                </p>
                <p>
                  Ubicados estratégicamente en el <strong className="text-accent">Complejo La Nueva Recova</strong>, 
                  hemos crecido hasta convertirnos en la empresa líder en alquiler de equipos para eventos 
                  en el noreste argentino, sirviendo desde íntimas celebraciones familiares hasta 
                  festivales masivos con miles de asistentes.
                </p>
                <p>
                  Nuestro compromiso va más allá del simple alquiler de equipos. Somos <strong className="text-primary">
                  socios estratégicos</strong> de nuestros clientes, brindando asesoramiento técnico, 
                  diseño de shows personalizados y soporte completo para garantizar el éxito de cada evento.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-card border-border text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-accent mb-2">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.text}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Star className="mr-2 h-5 w-5 text-accent" />
                  Lo Que Nos Distingue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-accent/50 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Target className="mr-2 h-5 w-5 text-accent" />
                Nuestra Misión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Brindar soluciones audiovisuales integrales de alta calidad, combinando tecnología 
                de vanguardia con un servicio personalizado y profesional, para hacer realidad 
                la visión de cada cliente y crear experiencias memorables que superen las expectativas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Award className="mr-2 h-5 w-5 text-accent" />
                Nuestra Visión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ser la empresa líder en el noreste argentino en alquiler de equipos audiovisuales, 
                reconocida por nuestra innovación tecnológica, excelencia en el servicio y 
                compromiso con el éxito de cada evento que respaldamos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Introduction */}
        <div className="text-center bg-gradient-card p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-primary mb-4">Nuestro Equipo</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contamos con un equipo de profesionales apasionados por la tecnología audiovisual, 
            con años de experiencia en la industria del entretenimiento y eventos corporativos. 
            Cada miembro de nuestro equipo está certificado y en constante capacitación para 
            ofrecer el mejor servicio.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="outline" className="border-accent text-accent">Técnicos Certificados</Badge>
            <Badge variant="outline" className="border-accent text-accent">Operadores Especializados</Badge>
            <Badge variant="outline" className="border-accent text-accent">Diseñadores de Shows</Badge>
            <Badge variant="outline" className="border-accent text-accent">Soporte 24/7</Badge>
          </div>

          <Button 
            size="lg"
            className="bg-gradient-accent hover:scale-105 transition-all duration-300 glow-accent"
          >
            <Link to="/productos">
              Conoce Nuestros Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
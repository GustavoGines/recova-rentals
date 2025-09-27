import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Star, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-glow-pulse">
              RECOVA RENTALS
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold">
              Equipos Profesionales para Eventos
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Transformamos tus eventos con la tecnología más avanzada en{' '}
              <span className="text-neon-blue font-semibold">pantallas LED</span>,{' '}
              <span className="text-neon-purple font-semibold">iluminación profesional</span>,{' '}
              <span className="text-neon-pink font-semibold">sistemas láser</span>,{' '}
              <span className="text-electric-cyan font-semibold">sonido de alta calidad</span>{' '}
              y <span className="text-accent font-semibold">escenarios modulares</span>.
            </p>
            
            <p className="text-md text-muted-foreground">
              Desde conciertos hasta eventos corporativos, tenemos todo lo que necesitas 
              para crear experiencias inolvidables.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <Star className="h-8 w-8 text-accent mx-auto" />
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Eventos Realizados</div>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 text-neon-blue mx-auto" />
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Personas Impactadas</div>
            </div>
            <div className="text-center space-y-2">
              <Award className="h-8 w-8 text-neon-purple mx-auto" />
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center space-y-2">
              <Play className="h-8 w-8 text-neon-pink mx-auto" />
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte Técnico</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/productos">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:scale-105 transition-all duration-300 glow-accent text-lg px-8 py-3"
              >
                Ver Nuestros Equipos
              </Button>
            </Link>
            <Link to="/galeria">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3 transition-all duration-300"
              >
                Ver Galería de Eventos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

// Import images for gallery (reusing generated images)
import pantallasLED from '@/assets/pantallas-led.jpg';
import iluminacion from '@/assets/iluminacion.jpg';
import lasers from '@/assets/lasers.jpg';
import sonido from '@/assets/sonido.jpg';
import escenarios from '@/assets/escenarios.jpg';

interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  category: string;
  image: string;
  equipment: string[];
  description: string;
}

const galleryEvents: GalleryEvent[] = [
  {
    id: '1',
    title: 'Festival de Música Electrónica - Formosa Beat',
    date: 'Marzo 2024',
    location: 'Parque Central, Formosa',
    attendees: '15,000',
    category: 'Festival',
    image: pantallasLED,
    equipment: ['Pantallas LED 4K', 'Sistema Láser', 'Iluminación RGB'],
    description: 'Espectacular festival con los mejores DJs nacionales e internacionales.',
  },
  {
    id: '2',
    title: 'Concierto Rock Nacional',
    date: 'Febrero 2024',
    location: 'Anfiteatro Municipal',
    attendees: '8,000',
    category: 'Concierto',
    image: iluminacion,
    equipment: ['Iluminación Profesional', 'Sonido 20kW', 'Escenario Principal'],
    description: 'Una noche memorable con las mejores bandas de rock del país.',
  },
  {
    id: '3',
    title: 'Show Láser Año Nuevo 2024',
    date: 'Diciembre 2023',
    location: 'Plaza San Martín',
    attendees: '25,000',
    category: 'Celebración',
    image: lasers,
    equipment: ['Sistema Láser Premium', 'Pantallas LED', 'Sonido Envolvente'],
    description: 'Espectacular show de luces láser para recibir el nuevo año.',
  },
  {
    id: '4',
    title: 'Evento Corporativo - Tech Summit',
    date: 'Noviembre 2023',
    location: 'Centro de Convenciones',
    attendees: '2,500',
    category: 'Corporativo',
    image: sonido,
    equipment: ['Sistema AV Completo', 'Pantallas LED', 'Sonido Conferencia'],
    description: 'Conferencia tecnológica con equipos de última generación.',
  },
  {
    id: '5',
    title: 'Fiesta de Casamiento Premium',
    date: 'Octubre 2023',
    location: 'Salón Los Arrayanes',
    attendees: '300',
    category: 'Social',
    image: escenarios,
    equipment: ['Iluminación Romántica', 'Sonido Ambiental', 'Escenario Modular'],
    description: 'Celebración elegante con ambientación personalizada.',
  },
  {
    id: '6',
    title: 'Festival Folklórico Regional',
    date: 'Septiembre 2023',
    location: 'Costanera de Formosa',
    attendees: '12,000',
    category: 'Cultural',
    image: pantallasLED,
    equipment: ['Escenario Principal', 'Iluminación', 'Sonido Profesional'],
    description: 'Celebración de la cultura regional con artistas locales.',
  },
];

export const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Galería de Eventos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre algunos de los eventos más espectaculares que hemos realizado con nuestros equipos
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event) => (
            <Card key={event.id} className="group bg-gradient-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {event.category}
                </Badge>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h3>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    {event.attendees} asistentes
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>

                {/* Equipment Used */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Equipos utilizados:</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.equipment.map((item, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-primary/50 text-primary"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:border-accent/80 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Listo para crear tu próximo evento?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a más de 500 clientes satisfechos que han confiado en nosotros 
              para crear experiencias inolvidables.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-accent hover:scale-105 transition-all duration-300 glow-accent"
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Cotizar Mi Evento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
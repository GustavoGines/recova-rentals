import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import event images
import ledScreensEvent from '@/assets/led-screens-event.png';
import laserShowEvent from '@/assets/laser-show-event.png';
import lightingSetupEvent from '@/assets/lighting-setup-event.png';
import stageProductionEvent from '@/assets/stage-production-event.png';

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
    image: ledScreensEvent,
    equipment: ['Pantallas LED 4K', 'Sistema Láser', 'Iluminación RGB'],
    description: 'Espectacular festival con los mejores DJs nacionales e internacionales. Una noche llena de música, luces y efectos visuales que quedará en la memoria de todos los asistentes.',
  },
  {
    id: '2',
    title: 'Show Láser Año Nuevo 2024',
    date: 'Diciembre 2023',
    location: 'Plaza San Martín',
    attendees: '25,000',
    category: 'Celebración',
    image: laserShowEvent,
    equipment: ['Sistema Láser Premium', 'Pantallas LED', 'Sonido Envolvente'],
    description: 'Espectacular show de luces láser para recibir el nuevo año. Un evento masivo que combinó tecnología de punta con un diseño visual impresionante.',
  },
  {
    id: '3',
    title: 'Concierto Rock Nacional',
    date: 'Febrero 2024',
    location: 'Anfiteatro Municipal',
    attendees: '8,000',
    category: 'Concierto',
    image: lightingSetupEvent,
    equipment: ['Iluminación Profesional', 'Sonido 20kW', 'Escenario Principal'],
    description: 'Una noche memorable con las mejores bandas de rock del país. Iluminación dinámica que acompañó cada momento musical creando una atmósfera única.',
  },
  {
    id: '4',
    title: 'Festival Folklórico Regional',
    date: 'Septiembre 2023',
    location: 'Costanera de Formosa',
    attendees: '12,000',
    category: 'Cultural',
    image: stageProductionEvent,
    equipment: ['Escenario Principal', 'Iluminación', 'Sonido Profesional'],
    description: 'Celebración de la cultura regional con artistas locales. Una producción completa que resaltó la belleza de nuestras tradiciones con tecnología moderna.',
  },
];

export const GallerySection = () => {
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);

  return (
    <section id="galeria" className="py-20 bg-background">
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

        {/* Events Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {galleryEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative h-80 md:h-96">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute top-6 left-6 bg-accent text-accent-foreground text-sm px-3 py-1">
                  {event.category}
                </Badge>
                
                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-accent" />
                      {event.attendees} asistentes
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/80 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-card rounded-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Event Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                <Badge className="absolute top-6 left-6 bg-accent text-accent-foreground">
                  {selectedEvent.category}
                </Badge>
              </div>
              
              {/* Event Details */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-6">
                  {selectedEvent.title}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Fecha</p>
                      <p className="text-sm">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Ubicación</p>
                      <p className="text-sm">{selectedEvent.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-5 w-5 mr-3 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Asistentes</p>
                      <p className="text-sm">{selectedEvent.attendees} personas</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Descripción del Evento</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Equipos Utilizados</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedEvent.equipment.map((item, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-primary/50 text-primary px-3 py-1"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center space-y-6">
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
            >
              Cotizar Mi Evento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
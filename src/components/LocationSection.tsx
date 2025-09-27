import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Navigation, Building } from 'lucide-react';

export const LocationSection = () => {
  const openGoogleMaps = () => {
    const address = encodeURIComponent("Azopardo 811, Complejo La Nueva Recova, Formosa, Argentina 3600");
    window.open(`https://www.google.com/maps/search/${address}`, '_blank');
  };

  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            ¿Dónde Estamos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visítanos en nuestras instalaciones o contáctanos para coordinr la entrega de equipos en tu evento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Details */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Building className="mr-3 h-6 w-6 text-accent" />
                  Nuestra Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Dirección</p>
                      <p className="text-muted-foreground">
                        Azopardo 811<br />
                        Complejo La Nueva Recova<br />
                        Formosa, Argentina 3600
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Horarios de Atención</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                        <p>Sábados: 9:00 - 14:00</p>
                        <p>Domingos: Cerrado</p>
                        <p className="text-accent text-sm mt-2">
                          * Entrega de equipos disponible 24/7 coordinando previamente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={openGoogleMaps}
                  className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300 glow-accent"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="mr-3 h-6 w-6 text-accent" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Teléfono Principal</p>
                      <a 
                        href="tel:+543704567890" 
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        +54 370 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp 24/7</p>
                      <a 
                        href="https://wa.me/543704567890" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        +54 370 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href="mailto:info@recovarentals.com" 
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        info@recovarentals.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border overflow-hidden">
              <CardContent className="p-0">
                {/* Map iframe */}
                <div className="relative h-96 bg-secondary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8!2d-58.1756!3d-26.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDExJzA4LjUiUyA1OMKwMTAnMzIuMiJX!5e0!3m2!1sen!2sar!4v1640000000000!5m2!1sen!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Recova Rentals Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-primary">Áreas de Servicio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-foreground font-semibold">Cobertura Principal:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Formosa Capital y alrededores
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Interior de la Provincia de Formosa
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Resistencia y Corrientes
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Consultar para otras ubicaciones
                    </li>
                  </ul>
                  <p className="text-sm text-accent mt-4">
                    * Realizamos entregas en un radio de 300km desde nuestra base
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
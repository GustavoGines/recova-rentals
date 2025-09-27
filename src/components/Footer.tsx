import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Youtube,
  MessageCircle
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  const services = [
    'Pantallas LED',
    'Iluminación Profesional',
    'Sistemas Láser',
    'Equipos de Sonido',
    'Escenarios Modulares',
    'Shows Personalizados',
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+54 370 456-7890',
      href: 'tel:+543704567890',
    },
    {
      icon: Mail,
      text: 'info@recovarentals.com',
      href: 'mailto:info@recovarentals.com',
    },
    {
      icon: MapPin,
      text: 'Azopardo 811, Complejo La Nueva Recova, Formosa',
      href: 'https://goo.gl/maps/example',
    },
    {
      icon: MessageCircle,
      text: 'WhatsApp 24/7',
      href: 'https://wa.me/543704567890',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-3">
                RECOVA RENTALS
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialistas en equipos audiovisuales para eventos. 
                Transformamos cada celebración en una experiencia inolvidable 
                con tecnología de vanguardia y servicio profesional.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Síguenos</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="hover:text-accent hover:border-accent">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:text-accent hover:border-accent">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:text-accent hover:border-accent">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <h5 className="font-semibold text-foreground text-sm">Horarios</h5>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
                <p className="text-accent">Entregas 24/7 coordinando</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>
              © {currentYear} Recova Rentals App. Todos los derechos reservados.
            </p>
            <p className="mt-1">
              Formosa, Argentina - Especialistas en Eventos Audiovisuales
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Política de Cancelación
            </a>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-card px-4 py-2 rounded-full border border-border">
            <MessageCircle className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Emergencias 24/7:
            </span>
            <a 
              href="https://wa.me/543704567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              WhatsApp +54 370 456-7890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
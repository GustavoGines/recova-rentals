import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Plus, ShoppingCart, Play, Zap, Volume2, Layers } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { CartItem } from './CartModal';

// Import images
import pantallasLED from '@/assets/pantallas-led.jpg';
import iluminacion from '@/assets/iluminacion.jpg';
import lasers from '@/assets/lasers.jpg';
import sonido from '@/assets/sonido.jpg';
import escenarios from '@/assets/escenarios.jpg';

// Import new event images
import ledScreensEvent from '@/assets/led-screens-event.png';
import laserShowEvent from '@/assets/laser-show-event.png';
import lightingSetupEvent from '@/assets/lighting-setup-event.png';
import stageProductionEvent from '@/assets/stage-production-event.png';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  product: Product;
  icon: React.ReactNode;
}

interface InteractiveImage {
  id: string;
  title: string;
  image: string;
  hotspots: Hotspot[];
}

interface ProductsSectionProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const products: Product[] = [
  {
    id: 'pantallas-led-combo',
    name: 'Pantallas LED Premium',
    category: 'Pantallas LED',
    description: 'Sistema completo de pantallas LED de alta resolución para eventos de gran escala. Tecnología 4K con módulos adaptables para cualquier formato.',
    features: ['Resolución 4K Ultra HD', 'Módulos escalables', 'Control remoto avanzado', 'Instalación profesional', 'Soporte técnico 24/7'],
    image: pantallasLED,
    popular: true,
  },
  {
    id: 'iluminacion-cabezas-moviles',
    name: 'Cabezas Móviles LED',
    category: 'Iluminación',
    description: 'Iluminación profesional con cabezas móviles de última generación. Control DMX y efectos programables.',
    features: ['24 cabezas móviles', 'Control DMX 512', 'Efectos GOBO', 'Colores RGB+W', 'Programación personalizada'],
    image: iluminacion,
  },
  {
    id: 'sistema-laser-rgb',
    name: 'Sistema Láser RGB',
    category: 'Lásers',
    description: 'Equipos láser profesionales de alta potencia para crear efectos visuales impactantes y sincronizados.',
    features: ['Láser RGB de 5W', 'Patrones programables', 'Sincronización musical', 'Control ILDA', 'Operador especializado'],
    image: lasers,
    popular: true,
  },
  {
    id: 'sistema-sonido-line-array',
    name: 'Sistema Line Array',
    category: 'Sonido',
    description: 'Sistema de audio profesional con tecnología Line Array para eventos de hasta 2000 personas.',
    features: ['Potencia 25kW', '16 micrófonos inalámbricos', 'Mesa digital 32 canales', 'Subwoofers 18"', 'Ingeniero de sonido'],
    image: sonido,
  },
  {
    id: 'escenario-truss-aluminio',
    name: 'Estructura Truss',
    category: 'Escenarios',
    description: 'Sistema modular de estructura en aluminio. Diseño robusto y versátil para cualquier configuración.',
    features: ['Truss cuadrado 30cm', 'Altura hasta 8m', 'Carga máxima 500kg/m', 'Montaje rápido', 'Certificación de seguridad'],
    image: escenarios,
  },
];

const interactiveImages: InteractiveImage[] = [
  {
    id: 'led-screens-setup',
    title: 'Pantallas LED Premium en Acción',
    image: ledScreensEvent,
    hotspots: [
      {
        id: 'led-panels',
        x: 45,
        y: 20,
        product: products[0],
        icon: <Play className="h-5 w-5" />
      },
      {
        id: 'stage-lighting',
        x: 75,
        y: 35,
        product: products[1],
        icon: <Zap className="h-5 w-5" />
      },
      {
        id: 'sound-equipment',
        x: 25,
        y: 60,
        product: products[3],
        icon: <Volume2 className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'laser-light-show',
    title: 'Espectáculo de Lásers y Luces',
    image: laserShowEvent,
    hotspots: [
      {
        id: 'laser-beams',
        x: 60,
        y: 25,
        product: products[2],
        icon: <Zap className="h-5 w-5" />
      },
      {
        id: 'moving-lights',
        x: 30,
        y: 15,
        product: products[1],
        icon: <Zap className="h-5 w-5" />
      },
      {
        id: 'stage-base',
        x: 50,
        y: 80,
        product: products[4],
        icon: <Layers className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'lighting-production',
    title: 'Producción de Iluminación Profesional',
    image: lightingSetupEvent,
    hotspots: [
      {
        id: 'chandelier-lights',
        x: 50,
        y: 30,
        product: products[1],
        icon: <Zap className="h-5 w-5" />
      },
      {
        id: 'structural-truss',
        x: 25,
        y: 10,
        product: products[4],
        icon: <Layers className="h-5 w-5" />
      },
      {
        id: 'led-wall',
        x: 70,
        y: 50,
        product: products[0],
        icon: <Play className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'complete-stage-production',
    title: 'Producción Completa de Escenario',
    image: stageProductionEvent,
    hotspots: [
      {
        id: 'ceiling-leds',
        x: 50,
        y: 15,
        product: products[0],
        icon: <Play className="h-5 w-5" />
      },
      {
        id: 'laser-effects',
        x: 35,
        y: 45,
        product: products[2],
        icon: <Zap className="h-5 w-5" />
      },
      {
        id: 'stage-structure',
        x: 65,
        y: 70,
        product: products[4],
        icon: <Layers className="h-5 w-5" />
      },
      {
        id: 'audio-system',
        x: 80,
        y: 55,
        product: products[3],
        icon: <Volume2 className="h-5 w-5" />
      }
    ]
  }
];

export const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      description: product.description,
    });
    
    toast({
      title: "Agregado a Mi Selección",
      description: `${product.name} se agregó a tu selección de equipos`,
    });
    
    setSelectedHotspot(null);
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    setSelectedHotspot(hotspot);
  };

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Explora con Hotspots
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Haz clic en los puntos interactivos para descubrir nuestros equipos y agregar lo que necesites a tu evento
          </p>
        </div>

        {/* Interactive Images */}
        <div className="space-y-8">
          {interactiveImages.map((imageData) => (
            <div key={imageData.id} className="relative group">
              {/* Image Title */}
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                {imageData.title}
              </h3>
              
              {/* Interactive Image Container */}
              <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-2xl bg-gradient-card border border-border/50">
                <img
                  src={imageData.image}
                  alt={imageData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark overlay for better hotspot visibility */}
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Hotspots */}
                {imageData.hotspots.map((hotspot) => (
                  <button
                    key={hotspot.id}
                    onClick={() => handleHotspotClick(hotspot)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group/hotspot"
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                    }}
                  >
                    {/* Animated pulse ring */}
                    <div className="absolute inset-0 rounded-full animate-ping bg-primary/30 scale-150" />
                    <div className="absolute inset-0 rounded-full animate-pulse bg-primary/20 scale-125" />
                    
                    {/* Hotspot button */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 bg-primary/90 backdrop-blur-sm rounded-full border-2 border-white/30 flex items-center justify-center text-white shadow-lg glow-primary group-hover/hotspot:scale-110 group-hover/hotspot:bg-primary transition-all duration-300">
                      {hotspot.icon}
                    </div>
                    
                    {/* Hotspot label */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {hotspot.product.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center text-white mr-3">
              <Play className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold text-primary">¿Cómo funciona?</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora las imágenes y haz clic en los puntos brillantes para descubrir los equipos disponibles. 
            Agrega lo que necesites a tu selección y coordina una reunión con nuestro equipo.
          </p>
        </div>

        {/* Hotspot Detail Panel */}
        {selectedHotspot && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-card border border-border rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative p-6 border-b border-border/50">
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <div className="pr-8">
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                    {selectedHotspot.product.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {selectedHotspot.product.name}
                  </h3>
                  {selectedHotspot.product.popular && (
                    <Badge variant="outline" className="text-accent border-accent">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Product Image */}
                <div className="h-48 rounded-xl overflow-hidden">
                  <img
                    src={selectedHotspot.product.image}
                    alt={selectedHotspot.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedHotspot.product.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Características incluidas:</h4>
                  <ul className="space-y-2">
                    {selectedHotspot.product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <Plus className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(selectedHotspot.product)}
                  className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300 glow-accent text-lg py-6"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Agregar a Mi Evento
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
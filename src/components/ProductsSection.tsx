import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { CartItem } from './CartModal';

// Import images
import pantallasLED from '@/assets/pantallas-led.jpg';
import iluminacion from '@/assets/iluminacion.jpg';
import lasers from '@/assets/lasers.jpg';
import sonido from '@/assets/sonido.jpg';
import escenarios from '@/assets/escenarios.jpg';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

interface ProductsSectionProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const products: Product[] = [
  {
    id: 'pantallas-led-combo',
    name: 'Combo Pantallas LED Premium',
    category: 'Pantallas LED',
    description: 'Sistema completo de pantallas LED de alta resolución para eventos de gran escala',
    features: ['Resolución 4K', 'Tamaños modulares', 'Control remoto', 'Instalación incluida'],
    image: pantallasLED,
    popular: true,
  },
  {
    id: 'iluminacion-profesional',
    name: 'Pack Iluminación Profesional',
    category: 'Iluminación',
    description: 'Sistema completo de iluminación con cabezas móviles, LED y efectos especiales',
    features: ['Cabezas móviles', 'Control DMX', 'Efectos LED', 'Programación personalizada'],
    image: iluminacion,
  },
  {
    id: 'sistema-laser',
    name: 'Sistema Láser Show',
    category: 'Lásers',
    description: 'Equipos láser profesionales para crear efectos visuales impactantes',
    features: ['Múltiples colores', 'Patrones programables', 'Sincronización musical', 'Operador incluido'],
    image: lasers,
    popular: true,
  },
  {
    id: 'sonido-completo',
    name: 'Sistema de Sonido Completo',
    category: 'Sonido',
    description: 'Equipo de audio profesional para eventos de hasta 1000 personas',
    features: ['Potencia 20kW', 'Micrófonos inalámbricos', 'Mesa de mezclas', 'Técnico incluido'],
    image: sonido,
  },
  {
    id: 'escenario-modular',
    name: 'Escenario Modular',
    category: 'Escenarios',
    description: 'Estructura de escenario modular adaptable a cualquier espacio',
    features: ['Altura ajustable', 'Tamaños variables', 'Montaje rápido', 'Escaleras incluidas'],
    image: escenarios,
  },
  {
    id: 'combo-completo',
    name: 'Combo Evento Completo',
    category: 'Combos',
    description: 'Paquete integral con todos los equipos necesarios para tu evento',
    features: ['Pantallas LED', 'Iluminación', 'Sonido', 'Escenario', 'Personal técnico'],
    image: pantallasLED,
    popular: true,
  },
];

export const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { toast } = useToast();

  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      description: product.description,
    });
    
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
    });
  };

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipos de última generación para hacer de tu evento una experiencia única e inolvidable
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category 
                  ? "bg-gradient-accent glow-accent" 
                  : "hover:border-primary hover:text-primary"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      {product.category}
                    </Badge>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Incluye:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Plus className="h-3 w-3 text-accent mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300 group-hover:glow-accent"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar al Carrito
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿No encuentras lo que buscas? Tenemos equipos adicionales disponibles.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Contactar para Equipos Personalizados
          </Button>
        </div>
      </div>
    </section>
  );
};
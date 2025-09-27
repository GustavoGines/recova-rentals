import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Trash2, Calendar as CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  name: string;
  category: string;
  description: string;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartModal = ({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }: CartModalProps) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: undefined as Date | undefined,
    eventLocation: '',
    notes: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerData.name || !customerData.email || !customerData.phone || !customerData.eventDate) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate sending data (in a real app, this would go to your backend)
    const orderData = {
      customer: customerData,
      items: cartItems,
      requestDate: new Date().toISOString(),
    };

    console.log('Solicitud de cotización enviada:', orderData);
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto para coordinar la reunión y presupuesto.",
    });

    // Reset form and cart
    setCustomerData({
      name: '',
      email: '',
      phone: '',
      eventDate: undefined,
      eventLocation: '',
      notes: '',
    });
    onClearCart();
    onClose();
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Solicitar Cotización
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Cart Items */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              Equipos Seleccionados ({totalItems} items)
            </h3>
            
            {cartItems.length === 0 ? (
              <p className="text-muted-foreground">No hay productos en el carrito</p>
            ) : (
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="text-sm text-accent">Cantidad: {item.quantity}</p>
                    </div>
                    <Button
                      onClick={() => onRemoveItem(item.id)}
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {cartItems.length > 0 && (
              <Button
                onClick={onClearCart}
                variant="outline"
                className="w-full"
              >
                Vaciar Carrito
              </Button>
            )}
          </div>

          {/* Customer Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Datos del Cliente</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  value={customerData.name}
                  onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerData.email}
                  onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                  placeholder="+54 370 123-4567"
                  required
                />
              </div>

              <div>
                <Label>Fecha del evento *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !customerData.eventDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {customerData.eventDate ? (
                        format(customerData.eventDate, "PPP", { locale: es })
                      ) : (
                        <span>Selecciona la fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={customerData.eventDate}
                      onSelect={(date) => setCustomerData({ ...customerData, eventDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="location">Ubicación del evento</Label>
                <Input
                  id="location"
                  value={customerData.eventLocation}
                  onChange={(e) => setCustomerData({ ...customerData, eventLocation: e.target.value })}
                  placeholder="Dirección o lugar del evento"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notas adicionales</Label>
                <Textarea
                  id="notes"
                  value={customerData.notes}
                  onChange={(e) => setCustomerData({ ...customerData, notes: e.target.value })}
                  placeholder="Detalles sobre tu evento, requerimientos especiales, etc."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-accent hover:scale-105 transition-all duration-300 glow-accent"
                disabled={cartItems.length === 0}
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                Solicitar Reunión y Presupuesto
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
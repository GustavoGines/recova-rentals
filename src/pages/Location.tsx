import { Header } from '@/components/Header';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={0}
        onCartOpen={() => {}}
      />
      
      <main className="pt-20">
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Location;
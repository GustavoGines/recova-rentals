import { TopBanner } from '@/components/TopBanner';
import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header 
        cartItemsCount={0}
        onCartOpen={() => {}}
      />
      
      <main className="pt-20">
        <GallerySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
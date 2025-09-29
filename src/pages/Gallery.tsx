import { Header } from '@/components/Header';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={0}
        onCartOpen={() => {}}
      />
      
      <main style={{ paddingTop: '80px' }}>
        <GallerySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={0}
        onCartOpen={() => {}}
      />
      
      <main className="pt-20">
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import Studios from '@/components/Studios';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <Clients />
      <Studios />
      <Contact />
      <Footer />
    </main>
  );
}

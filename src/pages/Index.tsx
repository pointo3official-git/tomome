import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import HowItWorks from "@/components/site/HowItWorks";
import WhyUs from "@/components/site/WhyUs";
import Testimonials from "@/components/site/Testimonials";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";
import { BookingProvider } from "@/components/site/BookingDialog";

const Index = () => {
  return (
    <BookingProvider>
      <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
      </main>
    </BookingProvider>
  );
};

export default Index;

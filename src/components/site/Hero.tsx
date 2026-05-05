import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImg from "@/assets/hero-mother.jpg";
import { useBooking } from "./BookingDialog";

const Hero = () => {
  const { open } = useBooking();
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Expecting mother gently cradling her belly in soft golden light"
          className="w-full h-full object-cover object-center scale-105 animate-float"
          width={1920}
          height={1080}
        />
        {/* Premium blended overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-hero mix-blend-soft-light opacity-80" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary-soft/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="animate-fade-up max-w-xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-primary" /> Caring companions for your motherhood
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground mb-6">
            Every heartbeat,
            <span className="block italic text-primary">held with care.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Tomome is your gentle guide through pregnancy and early motherhood —
            blending expert medical care, nourishing wellness, and emotional support
            into one trusted, beautifully simple journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" onClick={() => open("Start your journey")}>
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="soft" size="xl" onClick={() => open("Book a consultation")}>
              Book a Consultation
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50">
            <Stat value="10k+" label="Mothers guided" />
            <Stat value="98%" label="Feel supported" />
            <Stat value="24/7" label="Care access" />
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-2xl font-serif text-primary">{value}</div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
  </div>
);

export default Hero;
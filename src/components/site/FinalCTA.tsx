import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/cta-yoga.jpg";
import { useBooking } from "./BookingDialog";

const FinalCTA = () => {
  const { open } = useBooking();
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
          <img
            src={ctaImg}
            alt="Pregnant woman in serene prenatal yoga session"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
          <div className="relative px-8 md:px-16 py-20 md:py-28 max-w-2xl">
            <h2 className="text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Your motherhood story{" "}
              <span className="italic text-primary">begins with care.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take the first gentle step. Join thousands of mothers who feel safe,
              supported, and beautifully guided — every single day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={() => open("Start your journey")}>
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="soft" size="xl" onClick={() => open("Talk to an expert")}>Talk to an Expert</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
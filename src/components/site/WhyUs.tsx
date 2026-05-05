import { Shield, Sparkles, Users, Heart, Clock, Award } from "lucide-react";

const items = [
  { icon: Shield, title: "Trusted Experts", desc: "Board-certified gynecologists, nutritionists, and therapists." },
  { icon: Heart, title: "Emotional First", desc: "Care that begins with empathy, not protocols." },
  { icon: Sparkles, title: "Personalized Plans", desc: "Built around your trimester, body, and lifestyle." },
  { icon: Users, title: "Community of Mothers", desc: "Walk alongside others who truly understand." },
  { icon: Clock, title: "Always Available", desc: "Reach a caring expert whenever questions arise." },
  { icon: Award, title: "Structured Approach", desc: "A clear path so you never feel lost or alone." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Why Tomome
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-foreground">
            Built on trust.{" "}
            <span className="italic text-primary">Felt as warmth.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((i) => (
            <div key={i.title} className="flex gap-5 items-start">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center">
                <i.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-foreground">{i.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
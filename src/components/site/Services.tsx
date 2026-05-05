import { Stethoscope, Apple, Flower2, BookOpen, HeartHandshake, Sparkles } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Gynecology Consultation", desc: "Trusted specialists for every trimester, on your schedule." },
  { icon: Apple, title: "Nutrition Guidance", desc: "Personalized meal plans nourishing you and your baby." },
  { icon: Flower2, title: "Yoga & Wellness", desc: "Gentle prenatal sessions designed for mind and body." },
  { icon: BookOpen, title: "Pregnancy Education", desc: "Week-by-week guidance so nothing feels uncertain." },
  { icon: HeartHandshake, title: "Emotional Support", desc: "A safe space to share, breathe, and feel understood." },
  { icon: Sparkles, title: "Structured Programs", desc: "Curated journeys for first-time and seasoned mothers." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-foreground">
            Care that holds you,{" "}
            <span className="italic text-primary">all in one place.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card border border-border/60 rounded-3xl p-8 hover:shadow-soft transition-smooth hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-smooth">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
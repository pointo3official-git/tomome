const steps = [
  { n: "01", title: "Join", desc: "Share your journey. We tailor everything to your stage and needs." },
  { n: "02", title: "Get Guidance", desc: "Meet experts, receive plans, and learn what truly matters." },
  { n: "03", title: "Continuous Support", desc: "Daily check-ins, sessions, and a community that listens." },
  { n: "04", title: "Confident Motherhood", desc: "Step into motherhood feeling prepared, calm, and held." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-foreground">
            Four gentle steps to{" "}
            <span className="italic text-primary">feeling held.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-6xl font-serif text-primary/20 mb-3">{s.n}</div>
              <div className="w-12 h-px bg-primary mb-5" />
              <h3 className="text-2xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
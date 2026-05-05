import { Quote } from "lucide-react";

const stories = [
  {
    quote: "Tomome made me feel less alone. Every question, big or small, found a kind, expert answer.",
    name: "Aisha R.",
    role: "First-time mother",
  },
  {
    quote: "The yoga and nutrition guidance transformed how my body and mind felt during pregnancy.",
    name: "Priya S.",
    role: "Mother of two",
  },
  {
    quote: "It felt like having a wise, gentle friend in my pocket — every single day.",
    name: "Meera K.",
    role: "Expecting mother",
  },
];

const Testimonials = () => {
  return (
    <section id="stories" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Mother Stories
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-foreground">
            Held by Tomome,{" "}
            <span className="italic text-primary">in their words.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="bg-gradient-warm rounded-3xl p-8 border border-border/40 hover:shadow-soft transition-smooth"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6 font-serif italic">
                "{s.quote}"
              </blockquote>
              <figcaption>
                <div className="font-medium text-foreground">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
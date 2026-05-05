import aboutImg from "@/assets/about-hands.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-primary-soft/60 rounded-[2rem] -z-10 blur-2xl" />
          <img
            src={aboutImg}
            alt="Soft baby booties and peony in warm light"
            className="rounded-[2rem] shadow-soft w-full h-auto"
            loading="lazy"
            width={1280}
            height={1024}
          />
        </div>
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-foreground">
            Motherhood deserves more than{" "}
            <span className="italic text-primary">scattered advice.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Pregnancy can feel overwhelming — endless searches, conflicting opinions,
            and the quiet ache of wondering if you're doing it right. We've been there.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Tomome was born to bring everything a mother needs into one warm, trusted
            place: expert gynecologists, nutritionists, prenatal yoga, education, and
            emotional companionship — gently woven around your unique journey.
          </p>
          <p className="text-foreground/90 text-lg leading-relaxed font-serif italic">
            "You don't have to figure this out alone. We're here, every step."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
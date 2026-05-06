import { Heart, Baby, Users, Sparkles, BookOpen, Flower2 } from "lucide-react";
import { useBooking } from "./BookingDialog";

const journeySteps = [
  {
    icon: Heart,
    title: "Your tomome Journey Begins",
    subtitle: "Onboarding",
    description:
      "Help our experts tailor your pregnancy needs. Share your pregnancy details via the typeform shared over email/WhatsApp.",
    color: "bg-pink-100 text-pink-600",
    position: "left",
  },
  {
    icon: Users,
    title: "Get Access to Personal Experts",
    subtitle: "Care Manager & Nutrition Coach",
    description:
      "Connect to your personal experts via WhatsApp group (created in 24hrs). They'll guide you through challenges, design your pregnancy lifestyle, and provide personalized nutrition.",
    color: "bg-purple-100 text-purple-600",
    position: "right",
  },
  {
    icon: Flower2,
    title: "LIVE Yoga Classes",
    subtitle: "Daily Sessions",
    description:
      "Join daily Live Yoga customized as per your trimester, pregnancy needs and requirements. Choose from Sukshma, Garbha, Labour Prep, or Couple Yoga sessions.",
    color: "bg-green-100 text-green-600",
    position: "left",
  },
  {
    icon: BookOpen,
    title: "Weekend Workshops",
    subtitle: "Learn & Prepare",
    description:
      "Enjoy and learn about pregnancy while we prepare and educate you of what's NEXT. Topics include Labour Preparation, Baby Brain Development, Lactation, and more.",
    color: "bg-blue-100 text-blue-600",
    position: "right",
  },
  {
    icon: Baby,
    title: "Childbirth Education",
    subtitle: "Trimester 3",
    description:
      "Prepare yourself for Childbirth. Learn Labour Mechanisms, coping techniques, healthy birth practices, post birth bonding and education.",
    color: "bg-orange-100 text-orange-600",
    position: "left",
  },
  {
    icon: Sparkles,
    title: "Results You're Waiting For",
    subtitle: "Your Success Story",
    description:
      "Easy postpartum recovery, joyful pregnancy journey, calmer & healthy child, confident parents, reduced labour time, and much more.",
    color: "bg-rose-100 text-rose-600",
    position: "right",
  },
];

const HowItWorks = () => {
  const message = encodeURIComponent(
    "Hi Tomome, I would like to learn more about your program and start my pregnancy journey with Tomome.",
  );
  return (
    <section
      id="how"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-pink-50/30 overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
            Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 text-foreground">
            Walk through your{" "}
            <span className="italic text-primary">pregnancy journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Every step is designed to support you, educate you, and help you
            feel confident as you prepare for motherhood.
          </p>
        </div>

        {/* Journey Road */}
        <div className="relative max-w-6xl mx-auto">
          {/* The Road - only visible on medium screens and above */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
            <div className="absolute inset-0 border-l-4 border-r-4 border-dashed border-white/50" />
          </div>

          {/* Journey Steps */}
          <div className="space-y-12 md:space-y-24 relative">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.position === "left";

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 w-full ${
                      isLeft ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
                      <div
                        className={`inline-flex items-center gap-2 mb-3 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className={`${step.color} p-2 rounded-lg`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-primary">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif mb-2 text-foreground">
                        {step.title}
                      </h3>

                      <p className="text-primary/80 font-medium mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Checkpoint Circle - only visible on desktop to avoid confusion on mobile */}
                  <div className="relative z-10 flex-shrink-0 hidden md:flex">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-lg flex items-center justify-center border-4 border-white">
                      <div className="text-3xl">
                        {index === 0 && "🤰"}
                        {index === 1 && "👩‍⚕️"}
                        {index === 2 && "🧘‍♀️"}
                        {index === 3 && "📚"}
                        {index === 4 && "👶"}
                        {index === 5 && "💖"}
                      </div>
                    </div>

                    {/* Decorative hearts along the journey */}
                    {index < journeySteps.length - 1 && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-primary/20">
                        <Heart className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Spacer for alignment on larger screens */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action at the end of the journey */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-pink-100/50 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
              Ready to begin your journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of mothers who have experienced a joyful pregnancy
              journey with tomome.
            </p>
             <a
                href={`https://wa.me/916238869782?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

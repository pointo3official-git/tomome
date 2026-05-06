import { Phone, Apple, Dumbbell, BookOpen, Baby, Brain, ArrowRight } from "lucide-react";

const painPoints = [
  {
    number: "01",
    headline: "10 minutes. That's all you get.",
    body: "Your hospital visit is a quick body check vitals, maybe a scan. No space for your real questions about nutrition, sleep, or fear.",
  },
  {
    number: "02",
    headline: "3am and you're alone with Google.",
    body: "A cramp, a worry, a strange symptom and you're left searching the internet, finding 10 reasons to panic instead of one reason to breathe.",
  },
  {
    number: "03",
    headline: "Discharged with a baby. Zero guidance.",
    body: "After birth, hospital support vanishes. Postpartum emotions, feeding struggles, recovery, you're handed a newborn and figuring it out alone.",
  },
];

const solutions = [
  {
    icon: Phone,
    title: "24/7 Expert Doubt Clearance",
    desc: "Ask anything food, body, baby — and get answers from real experts at any hour. No more 3am spirals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    large: true,
    accent: "from-rose-900/70",
  },
  {
    icon: Apple,
    title: "Personalized Diet Plans",
    desc: "Trimester-specific nutrition built around your body, cravings, and health goals.",
    image: "https://i.pinimg.com/1200x/24/86/4f/24864fa604c48845ee9e64ebc6441c3c.jpg",
    large: false,
    accent: "from-emerald-900/70",
  },
  {
    icon: Dumbbell,
    title: "Pregnancy Yoga",
    desc: "Safe, guided movement to strengthen and prepare your body for birth.",
    image: "https://i.pinimg.com/736x/5b/36/a9/5b36a961fd2399758a6b554b86a4c7d1.jpg",
    large: false,
    accent: "from-violet-900/70",
  },
  {
    icon: BookOpen,
    title: "Childbirth Classes",
    desc: "Understand every stage of labor so you walk in prepared, not scared.",
    image: "https://i.pinimg.com/736x/86/f1/e7/86f1e7e6c1f0bf56d838cc51c91d6b40.jpg",
    large: false,
    accent: "from-sky-900/70",
  },
  {
    icon: Baby,
    title: "Parenting & Labor Prep",
    desc: "Labor room readiness, newborn care, breastfeeding — covered before you need it.",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=800&fit=crop",
    large: false,
    accent: "from-amber-900/70",
  },
  {
    icon: Brain,
    title: "Mental Health & Postpartum",
    desc: "Emotional support that doesn't stop at birth — because your mind matters as much as your body.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=500&fit=crop",
    large: true,
    accent: "from-pink-900/70",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why"
      className="py-24 md:py-25 overflow-hidden"
      style={{ backgroundColor: "#FDF8F2" }}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">

        {/* ── Top Label ───────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block h-px w-10 bg-rose-300" />
          <span
            className="text-xs uppercase tracking-[0.22em] font-semibold"
            style={{ color: "#C0636B" }}
          >
            Why Tomome
          </span>
          <span className="block h-px w-10 bg-rose-300" />
        </div>

        {/* ── Emotional Headline ──────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2
            className="text-4xl md:text-6xl leading-[1.1] mb-6"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: "#1A1208",
            }}
          >
            You're growing a life.
            <br />
            <span style={{ color: "#C0636B", fontStyle: "italic" }}>
              You deserve more than 10 minutes.
            </span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "#7A6655" }}
          >
            Most mothers go through pregnancy feeling unsupported, anxious, and
            alone not because they're weak, but because the system leaves them
            that way.
          </p>
        </div>

        {/* ── Pain Section ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {painPoints.map((p) => (
            <div
              key={p.number}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{ backgroundColor: "#1A1208" }}
            >
              {/* Faint number watermark */}
              <span
                className="absolute top-3 right-4 select-none pointer-events-none"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "72px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                }}
              >
                {p.number}
              </span>

              {/* Red cross badge */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "rgba(220,60,60,0.15)",
                  border: "1px solid rgba(220,60,60,0.3)",
                }}
              >
                <span style={{ color: "#E05555", fontSize: "14px", lineHeight: 1 }}>✕</span>
              </div>

              <h3
                className="font-semibold text-base mb-2 leading-snug"
                style={{ color: "#F5EDE4" }}
              >
                {p.headline}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,237,228,0.45)" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bridge ──────────────────────────────────────────── */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{
              backgroundColor: "#FEF0EE",
              border: "1px solid #FACBC7",
            }}
          >
            <span style={{ color: "#C0636B", fontSize: "16px" }}>✦</span>
            <p
              className="text-sm md:text-base font-medium"
              style={{ color: "#1A1208" }}
            >
              That's exactly why we built Tomome,
              <span style={{ color: "#C0636B" }}> everything in one place</span>,
              available whenever you need it.
            </p>
            <span style={{ color: "#C0636B", fontSize: "16px" }}>✦</span>
          </div>
        </div>

        {/* ── Solution Bento Grid ─────────────────────────────── */}
       

        {/* ── Closing Line ─────────────────────────────────────── */}
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-6"
            style={{ color: "#7A6655" }}
          >
          
            <span
              className="font-semibold"
              style={{ color: "#1A1208" }}
            >
             All of this in one program at a price every mother deserves.
            </span>
          </p>
          {/* <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{
              backgroundColor: "#C0636B",
              color: "#FDF8F2",
            }}
          >
            Start your journey
            <ArrowRight className="w-4 h-4" />
          </a> */}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
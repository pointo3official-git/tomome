import { useState, useEffect } from "react";

const services = [
  { 
    title: "Care team support", 
    desc: "Trusted specialists for every trimester, on your schedule.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop",
    imageAlt: "Healthcare professional consulting with pregnant woman"
  },
  { 
    title: "Nutrition Guidance", 
    desc: "Personalized meal plans nourishing you and your baby.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
    imageAlt: "Healthy nutritious food and fruits for pregnancy"
  },
  { 
    title: "Yoga & Wellness", 
    desc: "Gentle prenatal sessions designed for mind and body.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    imageAlt: "Pregnant woman doing yoga meditation"
  },
  { 
    title: "Childbirth Classes & Newborn Care", 
    desc: "Week-by-week guidance so nothing feels uncertain.",
    image: "https://i.pinimg.com/736x/05/9a/87/059a874e17375acf472011b750d10b83.jpg",
    imageAlt: "Educational books and learning materials"
  },
  { 
    title: "Emotional Support", 
    desc: "A safe space to share, breathe, and feel understood.",
    image: "https://i.pinimg.com/1200x/0e/d0/4d/0ed04d06a6a638a4b3d5c989cfa5090f.jpg",
    imageAlt: "Supportive community of mothers together"
  },
  { 
    title: "Baby Bonding Activities", 
    desc: "Curated journeys for first-time and seasoned mothers.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop",
    imageAlt: "Organized planning and structured program materials"
  },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getServicePosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90;
    const radius = isMobile ? 38 : 35;
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y, angle };
  };

  const getPetalPath = (index: number, total: number) => {
    const pos = getServicePosition(index, total);
    return `M 50 50 L ${pos.x} ${pos.y}`;
  };

  const topPos = getServicePosition(0, services.length);   // "Care team support" — top
  const botPos = getServicePosition(3, services.length);   // "Childbirth Classes" — bottom

  return (
    <section id="services" className="py-10 md:py-5 bg-gradient-to-b from-pink-50/30 via-white to-pink-50/30 overflow-hidden">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-pink-600 font-medium">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl mt-4 text-foreground font-semibold">
            Care that holds you,{" "}
            <span className="italic text-pink-600">all in one place.</span>
          </h2>
        </div>

        <div
          className="relative w-full mx-auto"
          style={{
            aspectRatio: '1/1',
            maxWidth: isMobile ? '500px' : '700px',
            minHeight: isMobile ? '500px' : '700px'
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Lines from center → side services only; skip index 0 (top) and 3 (bottom) */}
            {services.map((_, index) => {
              if (index === 0 || index === 3) return null;
              return (
                <path
                  key={`petal-${index}`}
                  d={getPetalPath(index, services.length)}
                  fill="none"
                  stroke="url(#petalGradient)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 200}ms`, animationDuration: '3s' }}
                />
              );
            })}

            {/* Dashed vertical line connecting top card ↔ bottom card */}
            <line
              x1={topPos.x}
              y1={topPos.y}
              x2={botPos.x}
              y2={botPos.y}
              stroke="url(#verticalGradient)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="2 2"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
          </svg>

          {/* Central Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className={`relative ${isMobile ? 'w-32 h-32' : 'w-48 h-48'} rounded-full overflow-hidden border-4 md:border-8 border-pink-200 shadow-2xl bg-white`}>
              <img
                src="/src/assets/logo.png"
                alt="Tomome"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 to-transparent pointer-events-none" />
            </div>
            <div className="absolute inset-0 -z-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`bg-petal-${i}`}
                  className={`absolute top-1/2 left-1/2 ${isMobile ? 'w-32 h-32' : 'w-40 h-40'} bg-pink-200/40 rounded-full blur-2xl`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(${isMobile ? '-80px' : '-100px'})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => {
            const pos = getServicePosition(index, services.length);
            return (
              <div
                key={service.title}
                className="absolute group"
                style={{
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="relative">
                  <div className={`${isMobile ? 'w-20 h-20' : 'w-32 h-32 md:w-36 md:h-36'} rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl bg-white group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/95 via-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2 md:p-4">
                      <span className="text-white font-semibold text-center text-xs md:text-sm">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-3 ${isMobile ? 'w-28' : 'w-36'} text-center`}>
                    <h3 className="font-semibold text-gray-900 mb-1 text-xs md:text-sm">
                      {service.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      {service.desc}
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full -z-10 shadow-lg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
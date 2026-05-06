import logo from "@/assets/logo.png";
import { useState } from "react";
import { X } from "lucide-react";

const privacySections = [
  {
    title: "Information We Collect",
    content: "Information is collected only to provide better personalized support.",
  },
  {
    title: "How We Use Your Information",
    content: "Your information is used to:",
    bullets: [
      "Provide personalized pregnancy and parenting support",
      "Connect you with relevant experts (gynecologists, nutritionists, trainers)",
      "Improve our services and user experience",
      "Communicate important updates, sessions, or guidance",
    ],
  },
  {
    title: "Data Protection & Security",
    content: "We take appropriate measures to protect your data:",
    bullets: [
      "Secure storage systems",
      "Restricted access to authorized team members only",
      "Protection against unauthorized access, misuse, or disclosure",
    ],
  },
  {
    title: "Confidentiality Commitment",
    bullets: [
      "Your personal and health information is treated as strictly confidential",
      "We do not sell, rent, or trade your data to third parties",
    ],
  },
  {
    title: "Sharing of Information",
    content: "We may share limited information only in the following cases:",
    bullets: [
      "With trusted professionals (e.g., doctors, trainers) only when required for your support",
      "When required by law or legal authorities",
    ],
  },
  {
    title: "Your Rights",
    content: "You have the right to:",
    bullets: [
      "Request access to your data",
      "Request correction of incorrect information",
      "Request deletion of your data (subject to legal requirements)",
    ],
  },
  {
    title: "Voluntary Information",
    bullets: [
      "Providing personal or health information is completely voluntary",
      "You may choose what information to share with us",
    ],
  },
];

const termsSections = [
  {
    number: "1.",
    title: "Nature of Services",
    content:
      "Tomome provides holistic pregnancy and parenting support, including guidance on wellness, nutrition, emotional well-being, and lifestyle. Our services are not a substitute for professional medical diagnosis, treatment, or emergency care. Users are strongly advised to consult qualified healthcare professionals for medical concerns.",
  },
  {
    number: "2.",
    title: "User Responsibility",
    content: "By using our services, you agree that:",
    bullets: [
      "You will provide accurate and honest information.",
      "You will make personal decisions based on your own judgment.",
      "You will consult a doctor or qualified medical professional when needed.",
    ],
  },
  {
    number: "3.",
    title: "Voluntary Participation",
    content:
      "Participation in Tomome programs, sessions, or recommendations is completely voluntary.",
    bullets: [
      "You are free to stop, pause, or discontinue at any time.",
      "If you feel discomfort, you are advised to immediately stop and seek appropriate medical guidance.",
    ],
  },
  {
    number: "4.",
    title: "Wellness & Holistic Approach Disclaimer",
    content:
      "Tomome follows a holistic and supportive approach, focusing on general well-being.",
    bullets: [
      "Results may vary from person to person.",
      "We do not guarantee specific outcomes.",
      "Our guidance is intended for supportive purposes only, not medical assurance.",
    ],
  },
  {
    number: "5.",
    title: "Limitation of Liability",
    content: "To the maximum extent permitted by law:",
    bullets: [
      "Tomome shall not be held responsible for any direct or indirect outcomes, including health-related decisions made by users.",
      "Any actions taken based on our guidance are at your own discretion and risk.",
    ],
  },
  {
    number: "6.",
    title: "No Medical Liability",
    content: "Tomome and its team (including trainers, consultants, and partners):",
    bullets: [
      "Do not provide licensed medical treatment unless explicitly stated.",
      "Are not responsible for medical conditions, complications, or emergencies.",
    ],
  },
  {
    number: "7.",
    title: "Respectful Use of Platform",
    content: "Users agree:",
    bullets: [
      "Not to misuse services or spread false information.",
      "Not to harm, defame, or harass the Tomome team or community members.",
    ],
  },
  {
    number: "8.",
    title: "Right to Refuse or Terminate Services",
    content: "Tomome reserves the right to:",
    bullets: [
      "Suspend or terminate access for users who violate terms.",
      "Refuse services in cases of misuse or inappropriate behavior.",
    ],
  },
  {
    number: "9.",
    title: "Intellectual Property",
    content:
      "All content (materials, programs, designs, branding) belongs to Tomome and cannot be copied, shared, or reused without permission.",
  },
  {
    number: "10.",
    title: "Legal Protection",
    content:
      "We value honest feedback and communication. However, any false, defamatory, abusive, or unlawful actions against Tomome or its team may be addressed in accordance with applicable laws.",
  },
  {
    number: "11.",
    title: "Updates to Terms",
    content:
      "Tomome may update these Terms & Conditions at any time. Continued use of the platform means you accept the updated terms.",
  },
  {
    number: "12.",
    title: "Independent Service Model",
    content:
      "Tomome operates as a collective of qualified professionals providing pregnancy and parenting support services.",
    bullets: [
      "We are not a registered medical institution or hospital.",
      "Our services are delivered by independent experts (such as wellness coaches, nutritionists, and consultants).",
      "All services are intended for supportive and educational purposes only. Users are encouraged to consult licensed medical professionals for clinical diagnosis, treatment, or emergencies.",
    ],
  },
];

// ── Reusable modal shell ──────────────────────────────────────────────────────
const Modal = ({
  label,
  title,
  children,
  onClose,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
    <div
      className="relative bg-card border border-border/60 rounded-3xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-7 pt-7 pb-4 border-b border-border/40">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium mb-1">
            {label}
          </p>
          <h2 className="text-2xl text-foreground" style={{ fontFamily: "serif" }}>
            {title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto px-7 py-6 space-y-6 flex-1">{children}</div>

      {/* Footer */}
      <div className="px-7 py-5 border-t border-border/40">
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Got it
        </button>
      </div>
    </div>
  </div>
);

// ── Privacy modal ─────────────────────────────────────────────────────────────
const PrivacyModal = ({ onClose }: { onClose: () => void }) => (
  <Modal label="Legal" title="Privacy Policy" onClose={onClose}>
    {privacySections.map((section) => (
      <div key={section.title}>
        <h3 className="text-sm font-semibold text-primary mb-2">{section.title}</h3>
        {section.content && (
          <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
            {section.content}
          </p>
        )}
        {section.bullets && (
          <ul className="space-y-1.5">
            {section.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </Modal>
);

// ── Terms modal ───────────────────────────────────────────────────────────────
const TermsModal = ({ onClose }: { onClose: () => void }) => (
  <Modal label="Legal" title="Terms & Conditions" onClose={onClose}>
    {termsSections.map((section) => (
      <div key={section.title}>
        <h3 className="text-sm font-semibold text-primary mb-2">
          {section.number} {section.title}
        </h3>
        {section.content && (
          <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
            {section.content}
          </p>
        )}
        {section.bullets && (
          <ul className="space-y-1.5">
            {section.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </Modal>
);

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="border-t border-border/60 py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Tomome" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tomome. Made with care for every mother.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-primary transition-smooth"
            >
              Privacy
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-primary transition-smooth"
            >
              Terms
            </button>
            <a href="#" className="hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </>
  );
};

export default Footer;
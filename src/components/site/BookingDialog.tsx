import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Ctx = { open: (title?: string) => void };
const BookingCtx = createContext<Ctx>({ open: () => {} });

export const useBooking = () => useContext(BookingCtx);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Begin your journey");

  const open = (t?: string) => {
    if (t) setTitle(t);
    else setTitle("Begin your journey");
    setIsOpen(true);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    toast({
      title: "We've received your request 💛",
      description: "One of our caring guides will reach out within 24 hours.",
    });
  };

  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[calc(100%-1.5rem)] sm:max-w-[480px] max-h-[92vh] overflow-y-auto rounded-3xl border-border/60 p-0">
          <div className="bg-gradient-hero px-6 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-primary-soft flex items-center justify-center mb-3 sm:mb-4">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
            </div>
            <DialogHeader className="text-left space-y-2">
              <DialogTitle className="font-serif text-2xl sm:text-3xl text-foreground">{title}</DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-muted-foreground">
                Share a little about yourself and we'll connect you with a caring expert.
              </DialogDescription>
            </DialogHeader>
          </div>

          <form onSubmit={onSubmit} className="px-6 sm:px-8 pb-6 sm:pb-8 pt-3 sm:pt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" required placeholder="Aanya Sharma" className="rounded-xl h-11" />
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3"> */}
              {/* <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@email.com" className="rounded-xl h-11" />
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+91" className="rounded-xl h-11" />
              </div>
            {/* </div> */}
            <div className="space-y-2">
              <Label htmlFor="stage">Pregnancy stage</Label>
              <Input id="stage" placeholder="e.g. 2nd trimester, planning, postpartum" className="rounded-xl h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we support you?</Label>
              <Textarea id="message" placeholder="Tell us what's on your mind…" className="rounded-xl min-h-[90px]" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Sparkles className="w-4 h-4" /> Send my request
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Your information is private and held with care.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
};
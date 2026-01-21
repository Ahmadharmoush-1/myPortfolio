import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "beirutwebb@gmail.com",
    href: "mailto:beirutwebb@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+961 78 841 832",
    href: "tel:+96178841832",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Beirut, Lebanon",
    href: "#",
  },
];

const socialLinks = [
  { name: "Facebook", initial: "Fb", href: "https://facebook.com" },
  { name: "Twitter", initial: "X", href: "https://twitter.com" },
  { name: "LinkedIn", initial: "Li", href: "https://www.linkedin.com/in/beirut-web-9406753a7/" },
  { name: "Instagram", initial: "Ig", href: "https://www.instagram.com/beirut.web/" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Create Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            Ready to elevate your digital presence? Reach out and let's discuss
            how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 bg-card p-8 lg:p-12 rounded-3xl border border-border/50 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Send us a message
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we'll respond within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-13 px-5 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-13 px-5 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number <span className="text-muted-foreground">(Optional)</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+961 1 234 567"
                  className="h-13 px-5 rounded-xl border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                  rows={5}
                  className="px-5 py-4 rounded-xl border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full btn-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-blue transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50 h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106069.65662128!2d35.41968799999999!3d33.8886294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2s!4v1705000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beirut Web Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className="text-sm font-bold">{social.initial}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

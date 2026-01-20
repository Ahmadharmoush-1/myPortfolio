import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import aboutGraphic from "@/assets/about-graphic.jpg";

const features = [
  "Custom Web Development",
  "Responsive Design",
  "SEO Optimization",
  "Performance Focused",
  "Modern Technologies",
  "Ongoing Support",
];

const stats = [
  { icon: Award, value: "5+", label: "Years Excellence" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Clock, value: "100%", label: "On-Time Delivery" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutGraphic}
                alt="Digital Innovation"
                className="w-full h-auto object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-card p-6 lg:p-8 rounded-2xl shadow-2xl border border-border/50 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold font-display text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-primary/20 animate-pulse-glow" />
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Digital
              <br />
              <span className="text-gradient">Excellence</span> Since 2019
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Beirut Web is a premier web development agency committed to
              delivering exceptional digital experiences. We seamlessly blend
              creativity, cutting-edge technology, and strategic insight to
              build websites that captivate and convert.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our team of distinguished developers, designers, and strategists
              collaborate to deliver solutions that consistently exceed
              expectations. From ambitious startups to established enterprises,
              we partner with visionary businesses to bring their digital
              aspirations to life.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

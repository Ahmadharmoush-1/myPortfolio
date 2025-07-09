import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "25+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3+", label: "Years Experience" }
  ];

  const tools = ["React", "Vite", "Tailwind",];

  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate web developer helping small businesses grow online with clean, fast websites that work perfectly on phones and computers. I specialize in creating powerful online presences for perfume shops, food businesses, supermarkets, and watch stores.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines cutting-edge design with practical functionality, ensuring your website not only looks stunning but also drives real business results through increased visibility and customer engagement.
              </p>
            </div>

            {/* Tools Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">My Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full text-orange-300 font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-gray-300">Mobile-first responsive design</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-gray-300">SEO optimized for local search</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-gray-300">Fast loading times & security</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">My Track Record</h3>
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
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

export default AboutSection;

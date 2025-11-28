import { useState } from "react";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section 
        id="about-me" 
        className="py-20 px-5 md:px-20 lg:px-32 text-text-white relative overflow-hidden"
        aria-labelledby="about-title"
    >
        {/* Decorative background */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        
        <div className="flex items-center gap-4 mb-12">
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold whitespace-nowrap">
                <span className="text-primary" aria-hidden="true">#</span>about-me
            </h2>
            <hr className="h-px flex-grow bg-gradient-to-r from-primary to-transparent border-0" aria-hidden="true" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-up">
                <p className="text-lg text-text-gray leading-relaxed mb-4">
                    Hello, I'm <span className="text-primary font-semibold">Taleb Mehdi</span>!
                </p>
                <p className="text-text-gray leading-relaxed mb-4">
                    I'm a self-taught full-stack web developer based in Algeria. I build modern, responsive, and user-friendly websites from scratch, turning ideas into clean and functional digital experiences.                
                </p>
                
                <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0 mb-0'}`}>
                    <p className="text-text-gray leading-relaxed mb-4">
                        I've been turning my passion for web development into real projects, helping clients build a strong and reliable online presence. Alongside that, I've been studying Computer Science for four years, which has strengthened my technical skills and problem-solving abilities.
                    </p>
                    <p className="text-text-gray leading-relaxed">
                        I always work to improve, stay curious, and learn the newest technologies and tools to create better and more efficient digital experiences.
                    </p>
                </div>

                <button 
                    onClick={() => setShowMore(!showMore)}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium mt-2 transition-colors"
                    aria-expanded={showMore}
                    aria-label={showMore ? "Show less about me" : "Read more about me"}
                >
                    {showMore ? 'Show less' : 'Read more'}
                    <svg className={`w-4 h-4 transition-transform duration-300 ${showMore ? '-rotate-90' : 'rotate-90'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Fun facts / Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div className="group bg-surface border border-border rounded-xl p-6 text-center hover:border-primary hover:-translate-y-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" style={{ animationDelay: '0ms' }}>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                    <div className="text-sm text-text-gray">Years of Experience</div>
                </div>
                <div className="group bg-surface border border-border rounded-xl p-6 text-center hover:border-primary hover:-translate-y-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" style={{ animationDelay: '100ms' }}>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm text-text-gray">Projects Completed</div>
                </div>
                <div className="group bg-surface border border-border rounded-xl p-6 text-center hover:border-primary hover:-translate-y-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" style={{ animationDelay: '200ms' }}>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-sm text-text-gray">Happy Clients</div>
                </div>
                <div className="group bg-surface border border-border rounded-xl p-6 text-center hover:border-primary hover:-translate-y-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" style={{ animationDelay: '300ms' }}>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                    <div className="text-sm text-text-gray">Cups of Coffee</div>
                </div>
            </div>
        </div>
    </section>
  );
};
export default AboutMe;

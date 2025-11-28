import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter-text', {
            strings: ["Taleb Mehdi a <span class='gradient-text'>Full-Stack Web developer</span>"],
            autoStart: true,
            delay: 50, 
            deleteSpeed: 20000000000000,
          });
          
        return () => {
          typewriter.stop();
        };
      }, []);

    return (
        <main 
            id="home"
            role="main"
            aria-labelledby="home-title"
            className="min-h-screen text-text-white flex justify-center items-center flex-col px-5 md:px-20 lg:px-32 py-20"
        >
            <section className='mb-20 animate-slide-up max-w-3xl' aria-label="Introduction">
                <div className="mb-4">
                    <span className="text-primary text-lg font-medium">Hello, I'm</span>
                </div>
                <h1 id="home-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span 
                        id="typewriter-text" 
                        aria-live="polite"
                        aria-label="Taleb Mehdi is a Full-Stack Web developer"
                    />
                </h1>
                <p className="text-lg md:text-xl text-text-gray mb-10 leading-relaxed max-w-xl">
                    I craft responsive websites where technologies meet creativity
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#contacts"
                        className="btn-primary inline-flex items-center gap-2 group"
                        aria-label="Navigate to contact section"
                    >
                        Contact me
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#projects"
                        className="btn-outline inline-flex items-center gap-2"
                        aria-label="View my projects"
                    >
                        View Projects
                    </a>
                </div>
            </section>
            
            <figure className='animate-fade-in max-w-md w-full' aria-label="Inspirational quote">
                <div className="relative bg-surface/50 backdrop-blur-sm border border-border rounded-lg p-6 card-hover">
                    <FormatQuoteIcon className="absolute -top-3 -left-3 text-primary text-4xl bg-background rounded-full p-1" aria-hidden="true" />
                    <blockquote className="text-center text-lg italic text-text-gray">
                        "With great power comes great electricity bill"
                    </blockquote>
                    <figcaption className="text-right mt-4 text-primary font-medium">— Dr. Who</figcaption>
                </div>
            </figure>

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        </main>
  );
};
export default Home;
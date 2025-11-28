import SkillCard from "../components/SkillCard";

const Skills = () => {

    const skills = [
        {
            title: 'Languages',
            description: 'TypeScript Python C Java'
        },
        {
            title: 'Frontend',
            description: 'React.js Next.js TailwindCSS'
        },
        {
            title: 'Backend',
            description: 'Node.js Express.js MongoDB'
        },
        {
            title: 'Tools',
            description: 'Git Docker Heroku'
        },
    ];


    return (
        <section 
            id="skills" 
            className="py-20 px-5 md:px-20 lg:px-32 text-text-white relative overflow-hidden"
            aria-labelledby="skills-title"
        >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            
            <div className="flex items-center gap-4 mb-12">
                <h2 id="skills-title" className="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    <span className="text-primary" aria-hidden="true">#</span>skills
                </h2>
                <hr className="h-px flex-grow bg-gradient-to-r from-primary to-transparent border-0" aria-hidden="true" />
            </div>
            
            <div 
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
                role="list"
                aria-label="Skills categories"
            >
                {skills.map((skill, index) => (
                    <div role="listitem" key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <SkillCard
                            title={skill.title}
                            description={skill.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;
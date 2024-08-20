import SkillCard from "../components/SkillCard";
import Points from "../components/Points";

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

        <div id="skills" className="lg:px-52 relative px-5 text-text-white mt-20">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl">
                        <span className="text-primary">#</span>skills
                    </h1>
                    <hr className="h-px flex-grow mt-1 bg-primary border-0" />
                </div>
                <div className='flex mt-10 flex-wrap gap-4 lg:gap-10 justify-center md:justify-start'>
                    {skills.map((skill, index) => (
                    <SkillCard
                    key={index}
                    title={skill.title}
                    description={skill.description}
                    />
                    ))}
                </div>
                <Points className="top-44 left-1" />
        </div>
    );
}
export default Skills;
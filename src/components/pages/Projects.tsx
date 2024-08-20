import ProjectCard from '../components/ProjectCard';
import img1 from '../../assets/Rectangle 22.png';

const projects = () => {

    const projects = [
        {
            title: 'ProtectX',
            description: 'Discord anti-crash bot.',
            image: img1,
            text: 'React Express Node.js MongoDB Discord.js Heroku',
            link: '#'
        },
        {
            title: 'ProtectX',
            description: 'Discord anti-crash bot.',
            image: img1,
            text: 'React Express Node.js MongoDB Discord.js Heroku',
            link: '#'
        },
        {
            title: 'ProtectX',
            description: 'Discord anti-crash bot.',
            image: img1,
            text: 'React Express Node.js MongoDB Discord.js Heroku',
            link: '#'
        },
        {
            title: 'ProtectX',
            description: 'Discord anti-crash bot.',
            image: img1,
            text: 'React Express Node.js MongoDB Discord.js Heroku',
            link: '#'
        },
      ];
    

    return (
        <div id="projects" className="lg:px-52 px-10 text-text-white">
            <div className="flex items-center gap-3">
                <h1 className="text-3xl">
                    <span className="text-primary">#</span>projects
                </h1>
                <hr className="h-px flex-grow mt-1 bg-primary border-0" />
                <a href="" className="text-xs hover:text-primary text-decoration-line: hover:underline ml-40">View all --{'>'}</a>
            </div>
            <div className='flex mt-10 flex-wrap gap-4 justify-center md:justify-start'>
                {projects.map((project, index) => (
                <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                text={project.text}
                link={project.link}
                />
                ))}
            </div>
        </div>
    )
}
export default projects;
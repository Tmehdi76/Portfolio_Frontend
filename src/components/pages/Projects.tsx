import ProjectCard from '../components/ProjectCard';

import img1 from '../../assets/baha-tech-.png';
import img2 from '../../assets/dz-artisan.png';
import img3 from '../../assets/eth.png';

const Projects = () => {

    const projectsList = [
        {
            title: 'Baha-Tech',
            description: 'An online store for CCTV and security systems.',
            image: img1,
            text: 'React Express Node.js MongoDB',
            link: 'https://github.com/zxkeyy/Projet2CP',
            demo: '#'
        },
        {
            title: 'DZ-Artisan',
            description: 'A platform connecting artisans with clients.',
            image: img2,
            text: 'React FastAPI PostgreSQL Docker',
            link: 'https://github.com/Tmehdi76/dz-artisan-Front',
            demo: 'https://dz-artisan-front.vercel.app/'
        },
        {
            title: 'Ethereum Block Explorer',
            description: 'A web app to explore Ethereum blocks and transactions.',
            image: img3,
            text: 'React JavaScript AlchemySDK Blockchain',
            link: 'https://github.com/Tmehdi76/blockexplorer',
            demo: 'https://blockexplorer-three-tau.vercel.app/'
        },
      ];
    

    return (
        <section 
            id="projects" 
            className="py-20 px-5 md:px-20 lg:px-32 text-text-white"
            aria-labelledby="projects-title"
        >
            <div className="flex items-center gap-4 mb-12">
                <h2 id="projects-title" className="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    <span className="text-primary" aria-hidden="true">#</span>projects
                </h2>
                <hr className="h-px flex-grow bg-gradient-to-r from-primary to-transparent border-0" aria-hidden="true" />
                <a 
                    href="https://github.com/Tmehdi76?tab=repositories" 
                    className="text-sm text-text-gray hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1 group"
                    aria-label="View all projects"
                >
                    View all 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
            <div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'
                role="list"
                aria-label="Project list"
            >
                {projectsList.map((project, index) => (
                    <div role="listitem" key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            text={project.text}
                            link={project.link}
                            demo={project.demo}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Projects;
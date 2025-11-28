interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    text: string;
    link: string;
    demo: string;
}

const ProjectCard = ({title, description, image, text, link, demo}: ProjectCardProps) => {
    const projectId = title.toLowerCase().replace(/\s+/g, '-');
    
    return (
        <article 
            className="group bg-surface border border-border rounded-xl overflow-hidden max-w-80 card-hover"
            aria-labelledby={`project-title-${projectId}`}
        >
            <figure className="relative overflow-hidden">
                <img 
                    src={image} 
                    alt={`Screenshot of ${title} project`} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>
            
            <div className="p-5">
                <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                    {text.split(' ').map((tech, index) => (
                        <li 
                            key={index} 
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                
                <h3 
                    id={`project-title-${projectId}`} 
                    className="text-xl font-semibold mb-2 text-text-white group-hover:text-primary transition-colors"
                >
                    {title}
                </h3>
                <p className="text-text-gray text-sm mb-4 leading-relaxed">{description}</p>
                
                <div className="flex gap-3">
                    {demo !== '#' && (
                        <a 
                            href={demo} 
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            aria-label={`View live demo of ${title} (opens in new tab)`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Live Demo</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    <a 
                        href={link} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-text-gray hover:text-text-white transition-colors"
                        aria-label={`View source code of ${title} on GitHub`}
                    >
                        <span>Code</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
}
export default ProjectCard;
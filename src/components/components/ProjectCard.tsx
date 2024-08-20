interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    text: string;
    link: string;
  }
const projectCard = (props:ProjectCardProps) => {
  return (
    <div className="border text-sm max-w-72 font-light ml-2 p-4 pt-0 leading-loose min-w-64">
        <div className="-mx-4">
            <img src={props.image} alt="project" className="w-full" />
        </div>
        <p>{props.text}</p>
        <hr className="-mx-4 my-2"></hr>
        <h2 className="text-xl font-medium">{props.title}</h2>
        <p className="mb-4">{props.description}</p>
        <a href={props.link} className="border p-1 border-primary">Live {'<'}~{'>'}</a>
    </div>
    );
}
export default projectCard;
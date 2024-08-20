interface SkillsCardProps {
    title: string;
    description: string;
}
const SkillCard = (props:SkillsCardProps) => {

    return (
        <div className="border text-sm max-w-56 font-light ml-2 pt-1 p-4 py-0 leading-loose min-w-56">
            <h2 className="text-lg font-medium">{props.title}</h2>
            <hr className="-mx-4 my-2"></hr>
            <p>{props.description}</p>
        </div>
    );  
}
export default SkillCard;
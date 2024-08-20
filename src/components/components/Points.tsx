interface VerticalMenuProps {
    className?: string;
  }

const Points = (props:VerticalMenuProps) => {
    return (
        <div className={`absolute flex flex-col space-y-2 ${props.className}`}>
            <div className="flex flex-row space-x-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <div className="h-1 w-1 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row space-x-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <div className="h-1 w-1 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row space-x-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <div className="h-1 w-1 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row space-x-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <div className="h-1 w-1 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row space-x-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <div className="h-1 w-1 bg-white rounded-full"></div>
            </div>
        </div>
    );
};
export default Points;
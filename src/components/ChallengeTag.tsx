import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ChallengeTagProps extends React.HTMLAttributes<HTMLElement> {
    
}

export default function ChallengeTag(props: ChallengeTagProps) {
    return (
        <>
            <span {...props} className={`py-1 px-2 rounded-md box-content text-xs whitespace-nowrap bg-gray-300 cursor-pointer  ${props.className}`}>
                <FontAwesomeIcon icon={faTag} className="mr-2" />
                {props.children}
            </span>
        </>
    );
}
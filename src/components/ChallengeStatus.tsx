import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faCheck, faHourglassStart, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ChallengeStatusProps extends React.HTMLAttributes<HTMLElement> {
    status: Challenges.Status
}

export default function ChallengeStatus({
    status, ...props
}: ChallengeStatusProps) {
    function resolveIcon() {
        let faIcon: IconDefinition = faHourglassStart;

        if (status === 'In Progress') {
            faIcon = faKeyboard;
        } else if (status === 'Finished') {
            faIcon = faCheck
        }

        return faIcon;
    }

    function resolveBackground() {
        let backgroundClassName = 'bg-gray-300';

        if (status === 'In Progress') {
            backgroundClassName = 'bg-amber-300';
        } else if (status === 'Finished') {
            backgroundClassName = 'bg-emerald-300';
        }

        return backgroundClassName;
    }
    
    return (
        <>
            <span {...props} className={`max-w-[12px] py-1 px-2 rounded-md box-content text-xs whitespace-nowrap ${resolveBackground() } cursor-pointer overflow-hidden transition-[max-width] duration-500 hover:max-w-[100px] ${props.className}`}>
                <FontAwesomeIcon icon={resolveIcon()} className="mr-3" />
                {status}
            </span>
        </>
    )
}
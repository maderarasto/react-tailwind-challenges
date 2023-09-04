import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faCheck, faHourglassStart, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type ChallengeStatusProps = {
    status: Challenges.Status
}

export default function ChallengeStatus({
    status
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
            <span className={`py-1 px-2 rounded-md text-xs ${resolveBackground() }`}>
                <FontAwesomeIcon icon={resolveIcon()} className="mr-2" />
                {status}
            </span>
        </>
    )
}
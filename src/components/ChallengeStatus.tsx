import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ChallengeStatusProps = {
    text: string,
    faIcon?: IconDefinition,
    status?: 'default' | 'success' | 'warning' | 'danger'
}

export default function ChallengeStatus({
    text,
    faIcon,
    status
}: ChallengeStatusProps) {
    function statusBackgroundClassName() {
        let backgroundClassName = 'bg-gray-300';

        if (status === 'default') {
            backgroundClassName = 'bg-gray-300';
        } else if (status === 'success') {
            backgroundClassName = 'bg-emerald-300'
        } else if (status === 'warning')  {
            backgroundClassName = 'bg-amber-300'
        } else if (status === 'danger') {
            backgroundClassName = 'bg-red-300'
        }

        return backgroundClassName;
    }
    
    return (
        <>
            <span className={`py-1 px-2 rounded-md text-xs ${statusBackgroundClassName()}`}>
                {faIcon ? <FontAwesomeIcon icon={faIcon} className="mr-2" /> : ''}
                {text}
            </span>
        </>
    )
}
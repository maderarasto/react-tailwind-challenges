
import { useNavigate } from "react-router-dom"
import ChallengeStatus from "./ChallengeStatus";

type ChallengeItemProps = {
    title: string
    path: string
    previewImage: string,
    status: Challenges.Status,
}

export default function ChallengeItem({
    title,
    path,
    previewImage,
    status,
}: ChallengeItemProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(path);
    }

    return (
        <div className="group self-start rounded-lg bg-gray-200 shadow-lg cursor-pointer overflow-hidden" onClick={handleClick}>
            <img className="contrast-75 group-hover:contrast-100" src={previewImage} alt={`Preview image of challenge ${title}`} />
            <div className="p-4">
                <h2 className="mb-1 font-bold text-lg">{title}</h2>
                <div className="flex">
                    <ChallengeStatus status={status} />
                </div>
            </div>
        </div>
    )
}
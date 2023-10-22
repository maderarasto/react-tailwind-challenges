
import { useNavigate } from "react-router-dom"
import ChallengeStatus from "./ChallengeStatus";
import ChallengeTag from "./ChallengeTag";

type ChallengeCardProps = {
    title: string
    path: string
    previewImage: string,
    tags: string[]
    status: Challenges.Status,
}

export default function ChallengeCard({
    title,
    path,
    previewImage,
    tags,
    status,
}: ChallengeCardProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(path);
    }

    return (
        <div className="group self-start rounded-lg bg-gray-200 shadow-lg cursor-pointer overflow-hidden" onClick={handleClick}>
            <img className="contrast-75 group-hover:contrast-100" src={previewImage} alt={`Preview image of challenge ${title}`} />
            <div className="p-4">
                <div className="relative">
                    <h2 className="mb-1 font-bold text-lg">{title}</h2>
                    <ChallengeStatus status={status} className="absolute top-1 right-0" />
                </div>
                <div className="flex flex-wrap gap-1">
                    {tags.map(tag => (
                        <ChallengeTag className="self-start">{tag}</ChallengeTag>
                    ))}
                </div>
            </div>
        </div>
    )
}
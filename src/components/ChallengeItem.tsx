
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
        <div className="relative group w-[240px] h-[240px] border-[1px] border-solid border-gray-300 rounded-lg shadow-md cursor-pointer hover:ring-2 hover:ring-violet-200" onClick={handleClick}>
            <img className="w-full h-full rounded-lg" src={previewImage} alt={`Preview image of challenge ${title}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 group-hover:from-violet-100"></div>
            <div className="absolute bottom-0 left-0 w-full py-4 px-2">
                <h3 className="font-semibold">{title}</h3>
                <ChallengeStatus status={status} />
            </div>
        </div>
    )
}
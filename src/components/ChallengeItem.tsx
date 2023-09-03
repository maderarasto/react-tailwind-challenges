import { useNavigate, useNavigation } from "react-router-dom"

type ChallengeItemProps = {
    title: string
    previewImage: string,
    state: string,
    path: string
}

export default function ChallengeItem({
    title,
    previewImage,
    state,
    path
}: ChallengeItemProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(path);
    }

    return (
        <div className="relative group w-[240px] h-[240px] border-[1px] border-solid border-gray-300 rounded-lg shadow-md cursor-pointer" onClick={handleClick}>
            <img className="w-full h-full rounded-lg" src={previewImage} alt={`Preview image of challenge ${title}`} />
            <div className="absolute bottom-0 left-0 w-full py-4 px-2 bg-gradient-to-t from-gray-300 group-hover:from-indigo-200">
                <h3 className="font-semibold">{title}</h3>
                <span className="py-1 px-2 rounded-md text-xs bg-amber-400">{state}</span>
            </div>
        </div>
    )
}
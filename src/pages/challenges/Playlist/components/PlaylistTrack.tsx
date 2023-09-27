import { useDuration } from "../../../../hooks/useDuration"

type PlaylistTrackProps = {
    name: string
    author : string
    image: string
    duration: number
    onClick?: (ev: React.MouseEvent<HTMLElement>) => void
    active: boolean
}

export default function PlaylistTrack({
    name,
    author,
    image,
    duration,
    onClick,
    active
}: PlaylistTrackProps) {
    const resolvedDuration = useDuration(duration, 'seconds');

    function handleTrackClick(ev: React.MouseEvent<HTMLElement>) {
        if (!onClick) return;
        onClick(ev); 
    }
    
    return (
        <div className={`flex gap-4 p-4 cursor-pointer ${active ? 'bg-sky-500 shadow-lg shadow-black/30 hover:bg-sky-600' : 'hover:bg-black/10'}`} onClick={handleTrackClick}>
            <figure className="relative w-32 h-20 shrink-0">
                <img src={image} className="w-full h-full rounded-md select-none" alt="Cover image of a playlist track" />
                <span className="absolute bottom-1 left-1 py-0.5 px-1.5 rounded-full font-medium text-xs leading-none text-gray-900 bg-white/50">
                    {resolvedDuration.format('H:mm:ss')}
                </span>
            </figure>
            <div>
                <h4 className={`mb-2 font-semibold leading-none ${active ? 'text-white' : ''}`}>{name}</h4>
                <h5 className={`font-medium text-sm leading-none ${active ? 'text-sky-300' : 'text-blue-500'}`}>{author}</h5>
            </div>
        </div>
    )
}
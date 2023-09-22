type SlideProps = {
    title: string,
    date: string,
    image: string
    duration: string
    synopse: string
    active: boolean
    className: string
}

export default function Slide({
    title,
    date,
    image,
    duration,
    synopse,
    active,
    className
}: SlideProps) {
    return (
        <div className={`absolute top-0 left-0 w-full h-full transition-all ${className}`}>
            <div className={`flex items-center justify-between mb-4 ${!active ? 'opacity-0' : ''}`}>
                <h3 className="font-bold text-xl text-sky-500">{title}</h3>
                <div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl text-slate-800 bg-sky-50">{date}</div>
            </div>
            <div className={`w-full h-52 mb-12 ${!active ? 'scale-y-[0.85] grayscale' : 'shadow-xl shadow-blue-300'}`}>
                <img className="w-full h-full" src={image} alt={`preview image of ${title}`} />
            </div>
            {active ? (
                <div className="text-lg text-slate-800">
                    <span>{duration}</span>
                    <p>{synopse}</p>
                </div>
            ) : ''}
        </div>
    )
}
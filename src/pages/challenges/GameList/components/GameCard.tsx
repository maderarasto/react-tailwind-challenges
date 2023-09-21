type GameCardProps = {
    image: string
    children: React.ReactNode
}

export default function GameCard({
    image,
    children
}: GameCardProps) {
    return (
        <div className="group flex flex-col border border-solid border-gray-200 shadow cursor-pointer hover:bg-gray-200">
            <img className="grow group-hover:opacity-75" src={image} alt="preview image" />
            <div className="h-16 p-2">
                {children}
            </div>
        </div>
    );
}
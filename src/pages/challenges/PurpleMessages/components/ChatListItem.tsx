interface ChatListItemProps {
    chatId: string
    chatImage: string
    chatName: string
    lastMessage?: string
    lastMessageAt?: number
    selected?: boolean
    onClick?: (chatId: string) => void
}

export default function ChatListItem({
    chatId,
    chatImage,
    chatName,
    selected,
    onClick
}: ChatListItemProps) {
    function handleItemClick() {
        if (onClick) {
            onClick(chatId);
        }
    }

    return (
        <div className={`flex items-center gap-4 py-6 px-8 cursor-pointer ${selected ? 'bg-violet-800' : 'hover:bg-violet-600'}`} onClick={handleItemClick}>
            <img src={chatImage} alt="" className="w-12 h-12 rounded-full border-4 border-violet-300 box-content" />
            <div className="flex flex-col self-start w-full text-white">
                <div className="flex items-baseline justify-between">
                    <h4 className="font-semibold">{chatName}</h4>
                    <span className="text-xs">16:00</span>
                </div>
                <p className="text-sm line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, ab laborum soluta perspiciatis velit doloremque.</p>
            </div>
        </div>
    );
}
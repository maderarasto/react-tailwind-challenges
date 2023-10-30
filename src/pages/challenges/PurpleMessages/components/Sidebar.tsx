import { faAddressBook, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ChatListItem from "./ChatListItem";

export default function Sidebar() {
    const [userId, setUserId] = useState<string|null>(null);
    const [activeChatId, setActiveChatId] = useState<string|null>(null);
    const [users, setUsers] = useState<Challenges.PurpleMessages.User[]>([]);
    const [chats, setChats] = useState<Challenges.PurpleMessages.Chat[]>([]);

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loadData().then(data => {
            setUserId(data.userId);
            setUsers(data.users);
            setChats(data.chats);
            
            if (data.chats && data.chats.length  > 0) {
                setActiveChatId(data.chats[0].id);
            }
        });
    }, [])

    function loadData(): Promise<Challenges.PurpleMessages.ChatData> {
        return new Promise((resolve, reject) => {
            fetch('assets/data/purple-messages/data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
        })
    }

    function handleSearchClick() {
        if (!refInput.current) {
            return;
        }

        refInput.current.focus();
    }

    function handleSearchInput(_: React.SyntheticEvent<HTMLInputElement>) {
        
    }

    function handleChatItemClick(chatId: string) {
        setActiveChatId(chatId);
    }

    function renderChatListItem(chat: Challenges.PurpleMessages.Chat) {
        const otherParticipantIds = chat.participants.filter((participantId) => participantId !== userId);
        const participant = users.find(user => user.id === otherParticipantIds[0]);

        if (!participant) {
            return '';
        }

        return (
            <ChatListItem 
                key={chat.id}
                chatId={chat.id}
                chatImage={participant.photoUrl}
                chatName={`${participant.firstName} ${participant.lastName}`}
                selected={activeChatId === chat.id}
                onClick={handleChatItemClick} 
            />
        )
    }

    return (
        <div className="flex flex-col shrink-0 w-[360px] bg-gradient-to-b from-violet-600 to-violet-400">
            <nav className="flex items-center h-16 bg-violet-500 shadow-2xl">
                <button className="flex items-center justify-center w-16 h-16 hover:bg-violet-600" onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-white" />
                </button>
                <input ref={refInput} type="text" name="" id="" className="grow h-16 px-4 outline-none text-white bg-transparent placeholder:text-white/70" placeholder="Search in contacts" onInput={handleSearchInput} />
                <button className="flex items-center justify-center w-16 h-16 hover:bg-violet-600">
                    <FontAwesomeIcon icon={faAddressBook} className="text-2xl text-white" />
                </button>
            </nav>
            <div className="overflow-auto [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-violet-800">
                {chats.map(chat => renderChatListItem(chat))}
            </div>
        </div>
    );
}
import { faAddressBook, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Sidebar() {
    const [users, setUsers] = useState<Challenges.PurpleMessages.User[]>([]);
    const [chats, setChats] = useState<Challenges.PurpleMessages.Chat[]>([]);

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loadData().then(data => {
            setUsers(data.users);
            setChats(data.chats);
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

    function handleSearchInput(ev: React.SyntheticEvent<HTMLInputElement>) {
        
    }

    return (
        <div className="flex flex-col shrink-0 w-[360px] bg-violet-400">
            <nav className="flex items-center h-16 bg-violet-500 shadow-lg">
                <button className="flex items-center justify-center w-16 h-16 hover:bg-violet-600" onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-white" />
                </button>
                <input ref={refInput} type="text" name="" id="" className="grow h-16 px-4 outline-none text-white bg-transparent placeholder:text-white/70" placeholder="Search in contacts" onInput={handleSearchInput} />
                <button className="flex items-center justify-center w-16 h-16 hover:bg-violet-600">
                    <FontAwesomeIcon icon={faAddressBook} className="text-2xl text-white" />
                </button>
            </nav>
            <div className="overflow-auto [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-violet-800">
            </div>
        </div>
    );
}
import { useEffect, useState } from "react"
import { Challenges } from "../../../typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PlaylistTrack from "./components/PlaylistTrack";

export default function Playlist() {
    const [open, setOpen] = useState(true);
    const [activeTrack, setActiveTrack] = useState<string | null>(null)
    const [playlist, setPlaylist] = useState<Challenges.Playlist.Playlist | null>(null);

    useEffect(() => {
        loadPlaylist().then(data => {
            setPlaylist(data);

            if (data?.tracks.length > 0) {
                setActiveTrack(data.tracks.at(0)?.id as string);
            }
        });

        setTimeout(() => console.log(playlist), 3000);
    }, []);

    function loadPlaylist(): Promise<Challenges.Playlist.Playlist> {
        return new Promise((resolve, reject) => {
            fetch('assets/data/playlist/playlist.json', {
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

    function handleCollapseClick() {
        setOpen(prev => !prev);
    }

    function handleTrackClick(track: Challenges.Playlist.Track) {
        setActiveTrack(track.id);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-purple-700 to-blue-700">
            <main className={`w-full max-w-md py-4 rounded-xl bg-white shadow-xl shadow-black/30`}>
                <header className="p-4">
                    <h2 className="text-2xl text-slate-800">{playlist?.name}</h2>
                    <div className="group flex items-center justify-between py-2 border-b border-slate-600 cursor-pointer select-none" onClick={handleCollapseClick}>
                        <span className="font-medium text-blue-500 group-hover:text-blue-600">{playlist?.tracks.length} videos</span>
                        <FontAwesomeIcon icon={faAngleDown} size="lg" className="text-slate-600 group-hover:text-slate-700" />
                    </div>
                </header>
                <article className={`${open ? 'h-[680px] opacity-100' : 'h-0 opacity-0'} overflow-y-scroll transition-all duration-500`}>
                    {playlist?.tracks.map(track => (
                        <PlaylistTrack
                            key={track.id}
                            name={track.name}
                            author={track.author}
                            image={track.image}
                            duration={track.duration}
                            onClick={() => handleTrackClick(track)}
                            active={track.id === activeTrack}
                        />
                    ))}
                </article>
            </main>
        </div>
    )
}
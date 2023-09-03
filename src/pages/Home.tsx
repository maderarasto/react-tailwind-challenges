import GameListPreviewImg from '../../challenges/game-list.webp';
import ChallengeItem from '../components/ChallengeItem';

export default function Home() {
    return (
        <>
            <h1 className="my-8 font-bold text-2xl text-center">ReactJS TailwindCSS Chanllenges</h1>
            <div className="grid grid-cols-4 px-8">
                <ChallengeItem 
                    title="Game List"
                    previewImage={GameListPreviewImg}
                    state="In progress"
                    path="/game-list"
                />
            </div>
        </>
    )
}
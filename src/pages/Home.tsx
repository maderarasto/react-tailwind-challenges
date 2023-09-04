import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import GameListPreviewImg from '../../challenges/game-list.webp';
import ChallengeItem from '../components/ChallengeItem';
import ChallengeStatus from '../components/ChallengeStatus';

export default function Home() {
    return (
        <div className="w-full max-w-5xl h-[768px]">
            <h1 className="my-8 font-bold text-2xl text-center">ReactJS TailwindCSS Chanllenges</h1>
            <div className="grid grid-cols-4 px-8">
                <ChallengeItem 
                    title="Game List"
                    previewImage={GameListPreviewImg}
                    status={<ChallengeStatus text='In progress' faIcon={faKeyboard} status="warning" />}
                    path="/game-list"
                />
            </div>
        </div>
    )
}
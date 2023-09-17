import ChallengeItem from '../components/ChallengeItem';
import challenges from '../../challenges';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    // NAVIGATE TO CURRENT CHALLENGE In PROGRESS
    const navigate = useNavigate();
    navigate('/game-list');

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-full max-w-7xl h-[768px]">
                <header className="mb-12">
                    <h1 className="font-bold text-2xl text-center">ReactJS TailwindCSS Chanllenges</h1>
                </header>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-8">
                    {challenges.map((item, index) => (
                        <ChallengeItem 
                            key={index}
                            title={item.name}
                            path={item.path}
                            previewImage={item.image}
                            status={item.status}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
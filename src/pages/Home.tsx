import { useEffect, useState } from 'react';
import ChallengeItem from '../components/ChallengeItem';

export default function Home() {
    const [challenges, setChallenges] = useState<Challenges.Item[]>([]);

    useEffect(() => {
        loadChallenges().then(challenges => {
            setChallenges(challenges);
        })
    }, []);

    function loadChallenges(): Promise<Challenges.Item[]> {
        return new Promise((resolve, reject) => {
            fetch('assets/data/challenges.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'applciation/json'
                }
            })
            .then(response => resolve(response.json()))
            .catch(err => reject(err))
        });
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
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
                            status={item.status as Challenges.Status}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
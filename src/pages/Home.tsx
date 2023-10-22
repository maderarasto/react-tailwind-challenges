import { useEffect, useState } from 'react';

import Navigation from '../components/Navigation';
import ChallengeCard from '../components/ChallengeCard';

export default function Home() {
    const [challenges, setChallenges] = useState<Challenges.Card[]>([]);

    useEffect(() => {
        loadChallenges().then(challenges => {
            setChallenges(challenges);
        })
    }, []);

    function loadChallenges(): Promise<Challenges.Card[]> {
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
        <div className="min-h-screen bg-gray-100">
            <Navigation />
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 py-6">
                {challenges.map(item => (
                    <ChallengeCard 
                        key={item.name}
                        title={item.name}
                        path={item.path}
                        previewImage={item.image}
                        tags={item.tags}
                        status={item.status as Challenges.Status}
                    />
                ))}
            </div>
        </div>
    )
}
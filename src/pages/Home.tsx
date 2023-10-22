import { useEffect, useState } from 'react';

import Navigation from '../components/Navigation';
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
        <div className="min-h-screen bg-gray-100">
            <Navigation />
        </div>
    )
}
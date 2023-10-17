import { useEffect, useState } from "react";
import CategorySection from "./components/CategorySection";
import Navigation from "./components/Navigation";

export default function GameListChallenge() {
    const [categories, setCategories] = useState<Challenges.GameList.Category[]>([]);

    useEffect(() => {
        loadCategories().then(categories => {
            setCategories(categories);
        });
    }, []);

    function loadCategories(): Promise<Challenges.GameList.Category[]> {
        return new Promise((resolve, reject) => {
            fetch('./assets/data/game-list/games.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => resolve(response.json()))
            .catch(err => reject(err))
        });
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="sticky top-0 flex items-end bg-white shadow-md">
                <div className="lg:container lg:mx-auto">
                    <Navigation />
                </div>
            </header>
            <div className="md:container mx-auto p-4">
                {categories.map(({id, name, cardsStyle, games}) => {
                    return <CategorySection key={id} title={name} cardsStyle={cardsStyle as Challenges.GameList.CardStyle} games={games} />;
                })}
            </div>
        </div>
    )
}
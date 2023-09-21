import CategorySection from "./components/CategorySection";
import Navigation from "./components/Navigation";
import sections from './data.json';

export default function GameListChallenge() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="flex items-end md:h-48 bg-white shadow-md">
                <div className="md:container md:mx-auto">
                    <Navigation />
                </div>
            </header>
            <div className="md:container mx-auto">
                {sections.map(({id, name, cardsStyle, games}) => {
                    return <CategorySection key={id} title={name} cardsStyle={cardsStyle as GameList.CardStyle} games={games} />;
                })}
            </div>
        </div>
    )
}
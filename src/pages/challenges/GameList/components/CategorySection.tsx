import { NavLink } from "react-router-dom";
import GameCard from "./GameCard";
import Rating from "./Rating";

type GameRecord = {
    id: string,
    name: string,
    image: string,
    rating: number,
    price?: number,
}

type CategorySectionProps = {
    title: string,
    cardsStyle: GameList.CardStyle
    games: GameRecord[]
}

export default function CategorySection({
    title,
    cardsStyle: cardStyle,
    games
}: CategorySectionProps) {
    function mapGridCols() {
        let gridCols = 'grid-cols-1';

        if (cardStyle === 'rect') {
            gridCols = 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'
        } else if (cardStyle === 'square') {
            gridCols = 'lg:grid-cols-6 md:grid-cols-3 grid-cols-2';
        }

        return gridCols;
    }

    function renderRectCard(game: GameRecord) {
        return (
            <GameCard key={game.id} image={game.image}>
                <div className="flex items-center justify-between w-full">
                    <NavLink to="" className="font-medium text-slate-600 group-hover:underline">{game.name}</NavLink>
                    <Rating total={5} value={game.rating} />
                </div>
            </GameCard>
        );
    }

    function renderSquareCard(game: GameRecord) {
        return (
            <GameCard key={game.id} image={game.image}>
                <div className="flex items-center justify-between w-full">
                    <Rating total={5} value={game.rating} />
                    {game.price !== undefined && game.price === 0 ? <span>Free</span> : ''}
                </div>
                <NavLink to="" className="font-medium lg:text-sm text-slate-600 group-hover:underline">{game.name}</NavLink>
            </GameCard>
        );
    }

    return (
        <div className="pt-6">
            <div className="flex items-end justify-between mb-3">
                <h2 className="font-medium text-2xl text-slate-600">{title}</h2>
                <button type="button" className="font-medium text-indigo-400 hover:underline">Load More</button>
            </div>
            <div className={`grid ${mapGridCols()}`}>
                {games.map(game => cardStyle === 'rect' ? renderRectCard(game) : renderSquareCard(game))}
            </div>
        </div>
    );
}
namespace Challenges {
    type Status = (
        | 'In Queue' 
        | 'In Progress' 
        | 'Finished'
    );

    type Item = {
        name: string
        path: string
        image: string
        status: Status
    }

    namespace GameList {
        type CardStyle = ('rect' | 'square')

        type Game = {
            id: string
            name: string
            image: string
            rating: number
        }

        type Category = {
            id: string
            name: string
            cardsStyle: CardStyle
            games: Game[]
        }
    }

    namespace MobileMovieAd {
        type Movie = {
            id: string
            title: string
            date: string
            image: string
            duration: string
            synopse: string
        }
    }
}
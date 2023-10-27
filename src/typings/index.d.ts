namespace Challenges {
    type Status = (
        | 'In Queue' 
        | 'In Progress' 
        | 'Finished'
    );

    type Card = {
        name: string
        path: string
        image: string
        tags: string[]
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

    namespace Playlist {
        type Track = {
            id: string
            name: string
            author: string
            image: string
            duration: number
        }

        type Playlist = {
            name: string
            tracks: Track[]
        }
    }

    namespace PurpleMessages {
        type User = {
            id: string
            firstName: string
            lastName: string
            photoUrl: string
        }

        type Chat = {
            id: string
            participants: string[]
            messages: any[]
        }

        type ChatData = {
            users: User[]
            chats: Chat[]
        }
    }
}
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Slideshow from "./components/Slideshow";

export default function MobileMovieAd() {
    const [movies, setMovies] = useState<Challenges.MobileMovieAd.Movie[]>([]);
    
    useEffect(() => {
        loadMovies().then(movies => {
            setMovies(movies);
        })
    }, [])

    function loadMovies(): Promise<Challenges.MobileMovieAd.Movie[]> {
        return new Promise((resolve, reject) => {
            fetch('assets/data/mobile-movie-ad/movies.json', {
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-900 to-slate-900">
            <div className="flex flex-col w-full max-w-md h-[800px] bg-white">
                <Navigation />
                <div className="grow py-8 bg-gradient-to-b from-transparent to-sky-100">
                    <Slideshow  movies={movies} />
                    <div className="flex w-full">
                        <button type="button" className="flex items-center justify-center w-full h-16 mx-12 font-medium text-xl text-white bg-sky-500 hover:bg-sky-600">
                            Buy Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
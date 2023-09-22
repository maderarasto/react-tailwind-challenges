import Navigation from "./components/Navigation";
import Slideshow from "./components/Slideshow";

export default function MobileMovieAd() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-900 to-slate-900">
            <div className="flex flex-col w-full max-w-md h-[800px] bg-white">
                <Navigation />
                <div className="grow py-8 bg-gradient-to-b from-transparent to-sky-100">
                    <Slideshow />
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
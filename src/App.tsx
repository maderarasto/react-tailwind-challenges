import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home';
import GameListChallenge from './pages/challenges/GameList';
import MobileMovieAd from './pages/challenges/MobileMovieAd';
import Playlist from './pages/challenges/Playlist';
import NotFound from './pages/NotFound';

console.log(import.meta.env);

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path='game-list' element={<GameListChallenge />} />
      <Route path="mobile-movie-ad" element={<MobileMovieAd />} />
      <Route path="playlist" element={<Playlist />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ), {
    //basename: import.meta.env.VITE_ROUTER_BASENAME
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

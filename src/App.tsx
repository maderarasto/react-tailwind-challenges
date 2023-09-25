import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home';
import GameListChallenge from './pages/challenges/GameList';
import MobileMovieAd from './pages/challenges/MobileMovieAd';

console.log(import.meta.env);

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path='game-list' element={<GameListChallenge />} />
      <Route path="mobile-movie-ad" element={<MobileMovieAd />} />
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

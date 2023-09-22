import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home';
import GameListChallenge from './pages/challenges/GameList';
import MobileMovieAd from './pages/challenges/MobileMovieAd';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path='game-list' element={<GameListChallenge />} />
      <Route path="mobile-movie-ad" element={<MobileMovieAd />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

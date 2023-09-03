import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<h1 className="text-xl">ReactJS TailwindCSS Challenges</h1>}>

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

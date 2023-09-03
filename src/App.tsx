import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <h1 className="uppercase">
        <FontAwesomeIcon icon={faCoffee} />
        Hello World!
      </h1>
    </>
  )
}

export default App

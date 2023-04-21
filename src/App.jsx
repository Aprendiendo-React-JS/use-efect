import bravoLogo from './assets/bravo.png'
import './App.css'
import { MiPrimerEstado } from './components/MiPrimerEstado'

function App() {


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={bravoLogo} className="logo react" alt="React logo" />
        </a>
      </div>   
      <h3>
        Estados React JS - Hook useState
      </h3>

      <MiPrimerEstado/>
      
    </>
  )
}

export default App

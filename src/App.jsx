import bravoLogo from './assets/bravo.png'
import './App.css'
import { UseEfectComponent } from './components/UseEfectComponent'
import { AjaxComponent } from './components/AjaxComponent'

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

      <UseEfectComponent/>
      
      <AjaxComponent/>
    </>
  )
}

export default App

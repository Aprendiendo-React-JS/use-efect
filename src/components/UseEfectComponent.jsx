import React, {useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const UseEfectComponent = () => {

  const [usuario, setUsuario] = useState('Alfredo Bravo');
  const [fecha, setFecha] = useState('19-01-1985');
  const [contador, setContador] = useState(0);

  const modUsiario = (e) => {
    setUsuario(e.target.value);
  }

  const cambiarFecha = () => {
    setUsuario(Date.now());
  }

  // [] -> Solo se ejecuta una vez, cuando se renderiza el componente
  useEffect(() => {
    console.log('Haz cargado el componente UseEfectComponent');
  }, []);

  // [usuario] -> Se ejecuta cuando se renderiza el componente y cuando cambia el valor de usuario
  useEffect(() => {
    
    setContador(contador + 1);
    console.log('Haz modificado el usuario: ' + contador);
  }, [fecha, usuario]);

  

  return (
    <div>
      <h2>El efecto - Hook useEfect</h2>

      <strong className="label">{usuario}</strong>
      <strong className={contador >= 10 ? "label label-green" : "label"}>{fecha}</strong>

      <p>
        <input type="text" 
          onChange={modUsiario}
          placeholder='Cambiar el nombre del usuario'
        />

        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>

      {/* {contador >= 10 && <AvisoComponent/>} */}
      {usuario == "Alfredo" && <AvisoComponent/>}
      
    </div>
  )
}

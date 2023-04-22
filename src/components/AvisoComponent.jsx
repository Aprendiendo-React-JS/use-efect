import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {

        console.log('Se ha montado el componente AvisoComponent');

        return () => {
            console.log('Se ha desmontado el componente AvisoComponent');
        }

    },[]);
  return (
    <div>
        <hr />
        <h3>Hemos superado los 10 cambios</h3>
        <button onClick={() => alert("Esta es una alerta desde Aviso...")}>Mostrar Alerta</button>
    </div>
  )
}

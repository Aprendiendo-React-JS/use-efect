import React,{useState} from 'react'

export const MiPrimerEstado = () => {
  
  // ------ Problematica ------
  /*
  let nombre = 'Alfredo Bravo Cuero'

  const cambiarNombre = () => {
    nombre = 'abracu'
    console.log(nombre)
  }*/

  // ---- Fin Problematica ------

  // ----Solucion a Problematica ------
  const [nombre, setNombre] = useState('Alfredo Bravo Cuero')

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo)
  }
  // ---- Fin Solucion a Problematica ------

  return (
    <>
      <div>Mi Primer Estado</div>
      <hr />
      <strong className={nombre.length >= 4? "verde label" : "rojo label"} >
        {nombre}: {nombre.length}
      </strong>
      &nbsp;
      <button onClick={ e => cambiarNombre(e, "Abracu") }>Cambiar Nombre x nickName</button>
      &nbsp;
      <input 
        type="text" 
        onChange={ e => setNombre(e.target.value)}
        placeholder='Cambiar el nombnre' 
      />
    </>
  )
}

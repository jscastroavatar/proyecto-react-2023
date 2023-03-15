import { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(()=> {
    axios.get(`${API_URL}assets`) //llama url
    .then((data) => {
      setCriptos(data.data.data) //ingresa a la data
    })
    .catch(() => {
      console.error("La petición falló")
    })
  }, []) 

  if (!criptos) return <span>Cargando...</span> //para que no se vea lento o pantalla blanca en conexiones lentas

  return (
    <>
    <h1>Lista de criptomonedas</h1>
    <ol>
      { 
        criptos.map(({id, name, priceUsd}) =>( //listar el nombre y precio
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        ))
      }
    </ol>
      
    </>
    
  )
}

export default App

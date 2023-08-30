import React from 'react'
import { Link } from 'react-router-dom';

const Dinamica = () => {
    const [equipo, setEquipo] = React.useState([])
    
    React.useEffect(() =>{


        //console.log('useEffect');
        //para poner el titulo en la pestaña
        //document.title = 'useEfect';
        //setEquipo(datos);
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        
        //para hacer un llamado a la url de una api
       const data =  await fetch('https://rickandmortyapi.com/api/character')
       const usuarios = await data.json()
       //console.log(usuarios)
       setEquipo(usuarios.results)

    }
  
    return (
    <div>
      <h1>Dinamica</h1>
      <ul> {
        equipo.map(item => (
            <li key={item.id}>
                <Link to={`/dinamica/${item.id}`}>
                {item.name} - {item.status} - {item.species}
                </Link>
                </li>
        )) 
        }
      </ul>
    </div>
  )
}

export default Dinamica

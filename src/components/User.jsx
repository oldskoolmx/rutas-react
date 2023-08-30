import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    //console.log(useParams());
    
    // para recuperar  el id 
    const {id} = useParams();
    console.log(id);

    const [pueblo, setPueblo] = React.useState([])
    
    React.useEffect(() =>{


        const obtenerDatos = async () => {
            
            //para hacer un llamado a la url de una api
           const data =  await fetch(`https://rickandmortyapi.com/api/character/${id}`)
           const usuarios = await data.json()
           //console.log(usuarios)
           setPueblo(usuarios)
    
        }
        //console.log('useEffect');
        //para poner el titulo en la pestaña
        //document.title = 'useEfect';
        //setEquipo(datos);
        obtenerDatos()
    },[id])



  return (
    <div>
      <h1> {pueblo.name} </h1>
      <p> {pueblo.status}</p>
    
    </div>
  )
}

export default User

import React from 'react'

const Nosotros = () => {
    // datos estaticos
    /* const datos = [
        {id:1, nombre: 'Reactjs'},
        {id:2, nombre: 'Vuejs'},
        {id:3, nombre: 'Angular'}
    ] */

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
       const data =  await fetch('https://jsonplaceholder.typicode.com/users')
       const usuarios = await data.json()
       //console.log(usuarios)
       setEquipo(usuarios)

    }
  
    return (
    <div>
      <h1>Nosotros</h1>
      <ul> {
        equipo.map(item => (
            <li key={item.id}>{item.name} - {item.email}</li>
        )) 
        }
      </ul>
    </div>
  )
}

export default Nosotros;

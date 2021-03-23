import React from 'react'
import Lay from "../components/Layout"
import "../styles/global.css"
import Card from "../components/CardAdopt"
import "../styles/adopcion.css"
import 'bootstrap/dist/css/bootstrap.css'
import p1 from "../images/adopciones/p1.jpg"
import p2 from "../images/adopciones/p2.jpg"
import p3 from "../images/adopciones/p3.jpg"



export default function adopcion() {

    return (
        <Lay>
      
        <div>
        
    <h2>Adoptar a un perro puede darle una segunda oportunidad en la vida, los perros no son juguetes y merecen una segunda oportunidad </h2>
    <h2>Adopciones disponibles:</h2>
        </div>
        <section class="Adopciones">
            <Card nombre="Luna" edad="1 año" desc="Juguetona y entrenada, se lleva bien con los animales" src={p1} ></Card>
            <Card nombre="Tango" edad="2 años" desc="Jugueton y entrenado, se lleva bien con los animales" src={p2} ></Card>
            <Card nombre="Dulce" edad="3 años" desc="Juguetona y entrenada, se lleva bien con los animales" src={p3} ></Card>
       
  
  </section>
      </Lay>
    )  



}


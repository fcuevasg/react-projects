import React from 'react'
import Lay from "../components/Layout"
import Busqueda from "../components/BarraBusqueda"
import Filtro from "../components/Filtro"
import "../styles/tienda.css"
import "../styles/busqueda.css"
import 'bootstrap/dist/css/bootstrap.css';





export default function tienda() {
    return (
    <Lay>
        <div className="display">
            <Busqueda>

            </Busqueda>
            
<Filtro></Filtro>


        <section className="productos">
            <div className="card w18" >
                <img className="card-img-top" id="producto1" src="kong--570x500.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Juguete 1</h5>
                    <p className="card-text">Ejemplo de juguete</p>
                    <p className="card-text">10€</p>

                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card w18" >
                <img className="card-img-top" id="producto2" src="peluches.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Juguete 2</h5>
                    <p className="card-text">Ejemplo de juguete</p>
                    <p className="card-text">10€</p>

                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card w18" >
                <img className="card-img-top" id="producto3"
                    src="juguete-para-perros-nice-pelotas-tenis-cuerda-algo-mta-11506.jpg"
                    alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Juguete 3</h5>
                    <p className="card-text">Ejemplo de juguete</p>
                    <p className="card-text">10€</p>

                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
            <div className="card w18" >


                <picture>
                    <source media="(min-width: 1440px)" srcset="juguete4-grande.jpg"/>
                    <source media="(min-width: 650px)" srcset="juguete4.jpg"/>
                    <source media="(min-width: 465px)" srcset="juguete4-pequeño.jpg"/>
                    <img src="juguete-para-perros-nice-pelotas-tenis-cuerda-algo-mta-11506.jpg"/>
                </picture>

                <div className="card-body">
                    <h5 className="card-title">Juguete 4</h5>
                    <p className="card-text">Juguete para perros</p>
                    <p className="card-text">10€</p>

                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>

        </section>
         </div>
        
      

    </Lay>
    )
}

import React from 'react'




export default function BarraBusqueda() {
    return (

            <section className="barraBusqueda">
                <ul className="nav nav-tabs">
                    <li className="nav-item dropdown">
                        <a className=" nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="true" aria-expanded="false">  categorias</a>
                        </li>

                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Juguetes</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Acuarios</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Comidas</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Cuidados</a>
                        </div>
                </ul>
                <form>

                <input type="text" id="inputBuscar" placeholder="Buscar..." className="inputTextForm"/> 

                 <button> Buscar</button>  


                </form>


            </section>
   



    )
}

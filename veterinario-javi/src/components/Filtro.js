import React from 'react'
import "../styles/busqueda.css"
import 'bootstrap/dist/css/bootstrap.css';


export default function Filtro() {
    return (
       <aside className="filtro">
           <form>
           <h3> Marca</h3>
                <input type="text" id="inputFiltro" placeholder="Buscar..." className="inputTextForm"/>
                <div className="itemForm">
                    <input type="checkbox" name="Royal Canin"/>
                    <label for="Royal Canin">Royal Canin</label>

                </div>
                <div className="itemForm">
                    <input type="checkbox" name="Purina"/>
                    <label for="Purina">Purina</label>
                </div>
                <div className="itemForm">
                    <input type="checkbox" name="Hacendado"/>
                    <label for="Hacendado">Hacendado</label>
                </div>
                <div className="itemForm">
                    <input type="checkbox" name="Kong"/>
                    <label for="Kong">Kong</label>
                </div>


                <h3> Precio</h3>

                <div className="itemForm">

                    <input type="text" className="inputTextForm" placeholder="0€"/>
                    <input type="text" placeholder="0€" className="inputTextForm"/>
                </div>
                <div className="itemForm">

                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>

                </div>
           </form>

       </aside>
    )
}

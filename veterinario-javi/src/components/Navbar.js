import { Link } from 'gatsby'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return (
        <div>
            <nav className="widgets barraSuperior">

                <div>
                    <ul className="nav botonera" id="navId">
                
                <li className="nav-item">
                <Link to="/servicios" className="nav-link"> Servicios</Link>


                </li>
                <li className="nav-item">
                <Link to="/adopcion" className="nav-link"> Adopcion</Link>
                </li>
                <li className="nav-item">
                <Link to="/tienda" className="nav-link"> Tienda</Link>

                </li>
            </ul>
        </div>
    </nav>
</div>

    )
}

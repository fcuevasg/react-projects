import React from 'react'

import Img from 'gatsby-image'
import * as styles from "../styles/card.module.css"
import 'bootstrap/dist/css/bootstrap.css';


// falta img

export default function CardServicios(props) {







    return (
        <div className={styles.card, styles.a1, styles.w18} >
        <div className="card-body">

            <Img fluid={props.imgsrc} />
            
            <h5 className="card-title">{props.nombre}</h5>
           <p className="card-text">Horario:</p>
          <p className="card-text">{props.horas}</p>

         <span className="btn btn-primary">Solicitar cita</span>
      </div>
    </div>
    
    )
}



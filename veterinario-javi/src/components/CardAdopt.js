import React from 'react'

import Img from 'gatsby-image'
import * as styles from "../styles/card.module.css"

import 'bootstrap/dist/css/bootstrap.css';


// falta img

export default function CardAdopt(props) {







    return (
        <div className={styles.card, styles.w18} >
        <div className="card-body">

           <img src={props.src} className="card-img-top"/>
            
            <h5 className="card-title">{props.nombre}</h5>
           <p className="card-text">Edad:{props.edad}</p>
          <p className="card-text">{props.desc}</p>

         <span className="btn btn-primary">Solicitar cita</span>
      </div>
    </div>
    
    )
}



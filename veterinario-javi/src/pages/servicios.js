import React from 'react'
import Lay from "../components/Layout"
import Card from "../components/CardServicios"
import { graphql } from 'gatsby'
import "../styles/servicios.css"
import 'bootstrap/dist/css/bootstrap.css';


export default function servicios({ data }) {
    
const serv = data.projects.nodes

    return (
       <Lay>
    <h2>Debido a restricciones por COVID19 los horarios pueden variar </h2>

           <section className="Adopciones">
  
          {
              serv.map(servicio =>(
              
             <Card nombre={servicio.frontmatter.nombre} horas={servicio.frontmatter.horas} imgsrc={servicio.frontmatter.imgsrc.childImageSharp.fluid}></Card>

              ))
          }
         
           </section>
       </Lay>
    )
}


export const query = graphql` query ProjectsPage {
    projects: allMarkdownRemark{
      nodes {
        frontmatter {
      	nombre
          horas
          imgsrc {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }}
  
  `

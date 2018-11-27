import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
        <div className='project-list section'>

            {
             projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id} ><ProjectSummary project={project} /></Link>
                ) 
             })   
            }       
            
            
        </div>
    )
}

export default ProjectList

/*

Lista que armazenas os projetos que são mapeados em ProjectSummary

projects && => isso impede que seja feito o .map caso não tenha dados

*/
import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
    return (
        <div className='project-list section'>

            {
             projects && projects.map(project => {
                return (<ProjectSummary project={project} key={project.id} />) 
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
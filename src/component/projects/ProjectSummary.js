import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className='project-list section'>
        
            <div className='card z-deph-o project-summary'>
            
                <div className='card-content grey-text text-darken-3'>
                
                    <span className='card-title'>{project.title}</span>
                    <p>Posted by the Net Ninja</p>
                    <p className='grey-text'>3rd-sept</p>
                
                </div>
            
            </div>
        
        </div>
    )
}

export default ProjectSummary
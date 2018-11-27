import React from 'react'

const ProjectDetails = (props) => {

  const id = props.match.params.id  

  return (
    <div className='container section project-details'>

        <div className='card z-depth-0'>
        
            <div className='card-content'>
            
                <span className='card-title'>Project Title - {id}</span>
                <p>  Consectetur enim sit cupidatat sint fugiat proident amet nulla est aliquip sunt ad consequat sunt. </p>
            
            </div>

            <div className='card-action gret lighten-4 grey-text'>
            
                <div>Posted by Net Ninja</div>
                <div>3rs-sep=2018</div>
            
            </div>
        
        </div>
      
    </div>
  )
}

export default ProjectDetails

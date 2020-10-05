import React from 'react'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import Typography from '@material-ui/core/Typography'
import ProjectCard from './ProjectCard/ProjectCard'
import './Projects.scss'
import ConstructionPage from '../../components/ConstructionPage'

function Projects() {
  const collection = useFirestore().collection('Projects')
  const projects = useFirestoreCollectionData(collection, { idField: 'id' }) // TODO: Change Const Name

  return (
    <div className="ProjectsPage">
      <Typography variant="h2" gutterBottom className="header">
        Projects
      </Typography>
      {/* <div className={'ProjectCards'}> */}
      {/*    {projects.map((project) => <ProjectCard project={project} key={project.id}/>)} */}
      {/* </div> */}
      <ConstructionPage />
    </div>
  )
}

export default Projects

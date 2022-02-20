import React from 'react'
import { ProjectTile } from './ProjectItem.style'

const ProjectItem = ({ onClick, img,dataAos }) => {
    return (
        <ProjectTile onClick={onClick} data-aos={dataAos}>
					<img src={img} alt="" />
				</ProjectTile>
    )
}

export default ProjectItem

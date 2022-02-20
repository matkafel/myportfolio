import React from 'react'
import { Icon } from './SocialIcon.style'


const SocialIcon = ({ color,backgroundColor, fontSize, link, name, top, left, animation, position }) => {
    return (
        <Icon style={{color: color, backgroundColor: backgroundColor, fontSize: fontSize, top: top, left: left, animation: animation, position:position}} href={link} target="_blank" rel="noreferrer"><i className={name}></i></Icon>
    )
}

export default SocialIcon

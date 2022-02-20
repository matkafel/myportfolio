import React from 'react'
import { Btn } from './Button.style'

const Button = ({ primary, children, onClick }) => {
    return (
        <Btn primary={primary} onClick={onClick}>{children}</Btn>
    )
}

export default Button

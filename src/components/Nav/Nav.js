import React from 'react';
import { NavWrapper, Logo, LinkWrapper, LinkTo } from './Nav.style';
import { ContentWrapper } from '../../App.style';
import { Link } from "react-scroll"


const Nav = () => {
   
    return (
			<ContentWrapper>
					<NavWrapper>
							<Logo className="fas fa-code"></Logo>
							<LinkWrapper>
							<Link smooth={true} duration={1000} to="projects"><LinkTo>Projects</LinkTo></Link>
							<Link smooth={true} duration={1500} to="aboutMe"><LinkTo>About Me</LinkTo></Link>
							<Link smooth={true} duration={2000} to="contact"><LinkTo>Contact</LinkTo></Link>
							</LinkWrapper>
					</NavWrapper>
				</ContentWrapper>
    )
}

export default Nav

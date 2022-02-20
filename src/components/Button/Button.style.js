import styled from "styled-components";
import { theme } from '../../theme/theme'

export const Btn = styled.button`
  background: ${props => props.primary ? `${theme.colors.primaryColor}` : `${theme.colors.lightMainBg}`};
  color: ${props => props.primary ? `${theme.colors.lightTextColor}` : `${theme.colors.darkTextColor}`};
	width: 182px;
  height: 48px; 
  font-size:1.8rem;
  font-weight: 500;
  padding: .8rem 1rem;
  border: 2px solid ${theme.colors.primaryColor};
  outline: none;
  cursor: pointer;
  transition: .5s;
  box-shadow:  5px 5px 10px rgba(0,0,0,0.20);
  font-family: 'Poppins';
  margin-right: 2rem;
	border-radius: 8px;

  &:hover{
 	 background:${props => props.primary ? `${theme.colors.lightMainBg}` : `${theme.colors.primaryColor}`};
		color: ${props => props.primary ? `${theme.colors.darkTextColor}` : `${theme.colors.lightTextColor}`};
 	 transform: scale(0.8)
  }


`;
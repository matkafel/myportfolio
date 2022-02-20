import styled from "styled-components";

export const Icon = styled.a`
	width: 64px;
	height: 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	text-decoration: none;
	transition: 0.5s;
	animation: motion 15s ease infinite;

 &:hover{
	transform: scale(1.4);
	box-shadow: rgba(0, 0, 0, 0.10) 0px 10px 10px 5px;
	background-color: white !important;
 }

 @keyframes motion {
  0% {transform: translateY(20px)}
  50% {transform: translateY(-20px)}
  100% {transform: translateY(20px)} 
}

`;
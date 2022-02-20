import styled from "styled-components";

export const ProjectTile = styled.div`
	width: 612px;
	height: 280px;
	border-radius: 8px;
	overflow: hidden;
	cursor: pointer;
	transition: 0.3s;
	margin-bottom: 36px;
	img{
		width: 100%;
		transition: all 15s ease;
	}
	&:hover{
		transform: scale(1.05);
		img{
			transform: translateY(-100%)  ;
		}
	}
	@media (max-width: 1248px) {
    width: 466px;
		height: 220px;
		margin-bottom: 24px;
 	 } 
	@media (max-width: 1000px) {
    width: 336px;
		height: 180px;
 	 } 
	@media (max-width: 1000px) {
    width: 336px;
		height: 180px;
 	 } 
	@media (max-width: 740px) {
    width: 100%;
		height: 320px;
 	 } 
	@media (max-width: 540px) {
		height: 240px;
 	 }
	@media (max-width: 440px) {
		height: 200px;
 	 }  
	@media (max-width: 380px) {
		height: 160px;
 	 }  
`;

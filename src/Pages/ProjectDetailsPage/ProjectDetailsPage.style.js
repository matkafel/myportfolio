import styled from "styled-components";

export const ProjectWrapper = styled.div`
	position: relative;
	margin-top: 36px;
	margin-bottom: 96px;
`;

export const HeadlineWrapper = styled.div`
	display:flex;
	justify-content: space-between;
`;

export const Headline = styled.p`
	font-size: 4.8rem;
	font-weight: 600;
	@media (max-width: 1000px) {
		font-size: 3.6rem;
	}
	@media (max-width: 540px) {
		font-size: 2.4rem;
	}  
`;

export const Image = styled.div`
	margin-top: 24px;
	box-shadow: rgba(0, 0, 0, 0.10) 0px 10px 10px 5px;
	img{
		width: 100%;
	}
	@media (max-width: 540px) {
		margin-top: 12px;
	}  
`;

export const DescriptionWrapper = styled.div`
	margin-top: 24px;
	position: relative;
	display: flex;
	justify-content: space-between;
	@media (max-width: 540px) {
		margin-top: 12px;
		flex-wrap: wrap;
	} 
`;

export const InformationsWrapper = styled.div`
	width:30%;
	@media (max-width: 540px) {
		width: 100%;
		margin-top: 12px;
	} 
`;

export const RolesWrapper = styled.div`
		width:30%;
		@media (max-width: 540px) {
			width: 100%;
			margin-top: 12px;
	} 
`;

export const TechnologiesWrapper = styled.div`
		width:30%;
		@media (max-width: 540px) {
			width: 100%;
			margin-top: 12px;
	} 
`;

export const Title = styled.div`
	font-size: 2.4rem;
	@media (max-width: 540px) {
		font-size: 1.8rem;
		font-weight: 600;
		} 
`;

export const Desc = styled.div`
	font-size: 1.4rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 48px;
`;

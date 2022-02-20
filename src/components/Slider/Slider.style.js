import styled from "styled-components";

export const SliderWrapper = styled.p`
/* 	margin-bottom: 96px */
`;

export const ImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	img{
		margin-left: 50%;
		transform: translateX(-50%);
		filter: grayscale(1);
		transition: 0.3s;
		cursor: pointer;
		&:hover{
			filter: none;
		}
	}
`;

export const Title = styled.p`
	font-size: 2.4rem;
	margin-bottom:48px;
`;
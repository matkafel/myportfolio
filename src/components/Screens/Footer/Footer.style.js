import styled from "styled-components";

export const FooterWrapper = styled.div`
	position: relative;
	margin-bottom: 64px;
`;

export const IconWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	padding-bottom: 18px;
`;

export const TextWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`

export const Text = styled.p`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.4rem;
	font-weight: 500;
	color: grey;
	i{
		color: red;
		margin: 0 6px;
		font-size: 1.4rem;
  	animation: pulse 1s linear infinite;
		@keyframes pulse{
			0% {
        transform: scale(1);
      }

      10% {
        transform: scale(1.1);
      }

      20% {
        transform: scale(0.9);
      }

      30% {
        transform: scale(1.2);
      }

      40% {
        transform: scale(0.9);
      }

      50% {
        transform: scale(1.05);
      }

      60% {
        transform: scale(0.95);
      }

      70% {
        transform: scale(1);
      }
		}	
	}
`
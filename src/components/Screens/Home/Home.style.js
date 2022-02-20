import styled from "styled-components";

export const HomeWrapper = styled.div`
	display: flex;
	min-height: calc(100vh - 76px);
	position: relative;
	@media (max-width: 720px) {
    min-height: calc(100vh - 64px)
 	 } 
	@media (max-width: 540px) {
    min-height: calc(100vh - 52px)
 	 } 
`;

export const ContentHomeWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 1000px) {
    flex-direction: column-reverse;
		justify-content:center;
 	 } 
`;

export const Headline = styled.h1`
	font-size: 18rem;
	font-weight: 900;
	position: absolute;
	@media (max-width: 1248px) {
    font-size: 14rem;
 	 } 
	@media (max-width: 1000px) {
    font-size: 10rem;
 	 } 
	@media (max-width: 740px) {
    font-size: 9rem;
		margin-left: 50%;
		transform: translateX(-50%) !important;
 	 } 
	@media (max-width: 640px) {
    font-size: 7rem;
 	 } 
	@media (max-width: 500px) {
    font-size: 5rem;
 	 } 
	@media (max-width: 370px) {
    font-size: 4.2rem;
 	 } 
`;

export const TextWrapper = styled.div`
	margin-left: 64px;
	margin-top: 64px;
	@media (max-width: 1248px) {
    margin: 0;
 	 } 
	@media (max-width: 1000px) {
    margin-top: 36px;
 	 } 
`;

export const Name = styled.div`
	font-size:1.8rem;
	margin-bottom: -12px;
	@media (max-width: 440px) {
		font-size: 1.4rem;
 	 } 
`;

export const Title = styled.div`
	font-size: 6.4rem;
	@media (max-width: 1248px) {
    font-size:5rem;
 	 } 
	@media (max-width: 540px) {
    font-size:4rem;
 	 } 
	@media (max-width: 440px) {
		font-size: 3.5rem;
 	 } 
	@media (max-width: 360px) {
		font-size: 3rem;
 	 } 
`;

export const SubTitle = styled.div`
	font-size: 6.4rem;
	margin-left: 64px;
	@media (max-width: 1248px) {
    font-size:5rem;
 	 } 
	@media (max-width: 540px) {
    font-size:4rem;
 	 } 
	@media (max-width: 440px) {
		font-size: 3.5rem;
    margin-left: 32px
 	 } 
	@media (max-width: 360px) {
		font-size: 3rem;
 	 } 
`;

export const ImageWrapper = styled.div`
	z-index:999;
	@media (max-width: 1248px) {
    img{
			width: 400px;
		}
 	 }
		@media (max-width: 1000px) {
    img{
			width: 300px;
		}
 	 } 
`;
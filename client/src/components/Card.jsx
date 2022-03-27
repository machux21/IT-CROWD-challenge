import React from 'react'
import styled from 'styled-components'

const Card = ({name, image, price, brand, brandLogo}) => {
	
	return (
		<CardContainer>
			<img src={image} alt={name} />
			<div style={{padding: "10px"}}>
				<h3>{name}</h3>
				<h4>${price} ARS</h4>
				<p>{brand}</p>
				<img src={brandLogo} alt={brand}/>
			</div>
		</CardContainer>
	)
}
const CardContainer = styled.div`
	width: 200px;
	height: 350px;
	margin: 20px;
	padding: 10px;
	border-radius: 8px;
	overflow: hidden;
	transition: 0.5s;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	text-decoration: none;
	&:hover{
		background-color: #eeee;
	}
	img {
		width: 100%;
		height: 150px;
	}
	div {
		img {
			width: 50px;
			height: 50px;
		}
	}
`;
export default Card
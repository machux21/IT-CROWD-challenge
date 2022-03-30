import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios
			.get("https://it-crowd-challenge.herokuapp.com/products")
			.then((res) => setProducts(res.data))
			.catch((error) => console.log(error));
	}, []);
	const handleClick = (id) => {
		axios
			.delete(
				`https://it-crowd-challenge.herokuapp.com/products/${id}?accesstoken=${localStorage.getItem(
					"token"
				)}`,
				{ withCredentials: true }
			)
			.then((res) => {
				alert(res.data);
				setProducts(products.filter((p) => p.id !== id));
			})
			.catch((error) => console.log(error));
	};
	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<ul>
				{products.map((p, i) => {
					return (
						<li key={i}>
							<div>
								<p>{p.name}</p>
								<Button onClick={() => handleClick(p.id)}>
									Delete
								</Button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const Button = styled.button`
	background-color: #043927;
	justify-self: center;
	border-radius: 5px;
	color: white;
	height: 40px;
	border: none;
	margin: 10px;
	font-size: 20px;
	&:hover {
		background-color: #008000;
	}
`;

export default DeleteProducts;

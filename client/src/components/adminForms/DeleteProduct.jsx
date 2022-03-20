import React, { useEffect, useState } from "react";
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
								<button onClick={() => handleClick(p.id)}>
									Delete
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default DeleteProducts;

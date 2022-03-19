import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
const Detail = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:3001/products/${id}`)
			.then((res) => setProduct(res.data))
			.catch((error) => console.log(error));
	}, []);
	console.log(product);
	return (
		<>
			<Navbar />
			<div>
				{product ? (
					<div>
						<h2>{product.name}</h2>
						<img
							src={product.image_url}
							alt={product.name}
							width="300"
							height="300"
						/>
						<span>{product.description}</span>
						<span>{product.Brand.name}</span>
						<img
							src={product.Brand.logo_url}
							alt={product.Brand.name}
							width="300"
							height="300"
						/>
						<h4>Price: ${product.price}</h4>
					</div>
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</>
	);
};

export default Detail;

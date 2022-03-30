import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const initialForm = {
	id: "",
	name: "",
	description: "",
	image_url: "",
	price: "",
	brand: "",
};
const UpdateProduct = () => {
	const [form, setForm] = useState(initialForm);
	const [products, setProducts] = useState([]);

	//FETCHING PRODUCTS
	useEffect(() => {
		axios
			.get("https://it-crowd-challenge.herokuapp.com/products")
			.then((res) => setProducts(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleBrands = (e) => {
		const { value } = e.target;
		const product = products.find((p) => p.id == value);
		const { id, name, description, image_url, price, Brand } = product;
		setForm({ id, name, description, image_url, price, brand: Brand.name });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			form.id &&
			form.name &&
			form.description &&
			form.image_url &&
			form.price &&
			form.brand
		) {
			axios
				.put(
					`https://it-crowd-challenge.herokuapp.com/products/${
						form.id
					}?accesstoken=${localStorage.getItem("token")}`,
					form,
					{
						withCredentials: true,
					}
				)
				.then((res) => alert(res.data))
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<div style={{ marginTop: "20px" }}>
			<form
				style={{
					margin: "0 auto",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit}
			>
				<div style={{ display: "flex" }}>
					<label>
						Choose a product
						<br />
						<Select name="products" onChange={handleBrands}>
							<option value="default">Products</option>
							{products.map((p, i) => (
								<option key={i} value={p.id}>
									{p.name}
								</option>
							))}
						</Select>
					</label>
					<label>
						<Input
							style={{ marginLeft: "10px" }}
							type="text"
							placeholder="Name..."
							name="name"
							onChange={handleChange}
							value={form.name}
						/>
					</label>
				</div>
				<div style={{ display: "flex" }}>
					<label>
						Image
						<br />
						<Input
							type="text"
							placeholder="Image url..."
							name="image_url"
							onChange={handleChange}
							value={form.image_url}
						/>
					</label>
				</div>
				<label>
					Description
					<br />
					<Textarea
						name="description"
						onChange={handleChange}
						value={form.description}
						cols="30"
						rows="10"
					>
						Description...
					</Textarea>
				</label>
				<p>Brand: {form.brand}</p>
				<Button type="submit">Update product</Button>
			</form>
		</div>
	);
};

const Input = styled.input`
	min-width: 200px;
	max-width: 350px;
	height: 50px;
	border-radius: 5px;
	margin: 10px auto;
	border: 2px solid black;
	padding-left: 10px;
	font-size: 20px;
`;

const Textarea = styled.textarea`
	border-radius: 5px;
	margin: 10px auto;
	border: 2px solid black;
	padding-left: 10px;
	font-size: 20px;
`;

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
const Select = styled.select`
	background-color: #043927;
	height: 40px;
	width: 100px;
	color: white;
	font-size: 18px;
	border-radius: 5px;
`;

export default UpdateProduct;

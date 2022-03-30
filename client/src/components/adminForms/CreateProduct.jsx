import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const initialForm = {
	name: "",
	description: "",
	image_url: "",
	price: "",
	brand: "",
};
const CreateProduct = () => {
	const [form, setForm] = useState(initialForm);
	const [brands, setBrands] = useState([]);
	//FETCHING BRANDS
	useEffect(() => {
		axios
			.get("https://it-crowd-challenge.herokuapp.com/brands")
			.then((res) => setBrands(res.data))
			.catch((error) => console.log(error));
	}, []);
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			form.name &&
			form.description &&
			form.image_url &&
			form.price &&
			form.brand
		) {
			axios
				.post(
					`https://it-crowd-challenge.herokuapp.com/products?accesstoken=${localStorage.getItem(
						"token"
					)}`,
					form,
					{ withCredentials: true }
				)
				.then((res) => alert(res.data))
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	console.log(form);
	return (
		<div style={{ display: "flex", justifyContent: "center", height: "100%"}}>
			<form
				style={{
					margin: "0 auto",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit}
			>
			<div style={{display: "flex"}}>
				<label>
					Name
					<br />
					<Input
						type="text"
						placeholder="Name..."
						name="name"
						onChange={handleChange}
						value={form.name}
					/>
				</label>
				<label>
					Image
					<br />
					<Input
						style={{marginLeft: "10px"}}
						type="text"
						placeholder="Image url..."
						name="image_url"
						onChange={handleChange}
						value={form.image_url}
					/>
				</label>
				</div>
				<div style={{display: "flex"}}>
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
				<label>
					Price
					<br />
					<Input
						style={{marginLeft: "10px"}}
						type="number"
						placeholder="Price..."
						name="price"
						onChange={handleChange}
						value={form.price}
					/>
				</label>
				</div>
				<label>
					Choose a brand
					<br />
					<Select name="brand" onChange={handleChange}>
						<option value="default">Brands</option>
						{brands.map((b, i) => (
							<option key={i} value={b.id}>
								{b.name}
							</option>
						))}
					</Select>
				</label>
				<Button type="submit">Create product</Button>
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
	&:hover{
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

`
export default CreateProduct;

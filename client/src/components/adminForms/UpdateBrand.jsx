import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const initialForm = {
	id: null,
	name: "",
	logo_url: "",
};
const UpdateBrand = () => {
	const [form, setForm] = useState(initialForm);
	const [brands, setBrands] = useState([]);
	//FETCHING BRANDS
	useEffect(() => {
		axios
			.get("https://it-crowd-challenge.herokuapp.com/brands")
			.then((res) => setBrands(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleBrands = (e) => {
		const { value } = e.target;
		if (value === "default") {
			return setForm(initialForm);
		}
		const brand = brands.find((b) => b.id == value);
		console.log(brand);
		setForm({ id: brand.id, name: brand.name, logo_url: brand.logo_url });
	};
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.logo_url) {
			axios
				.put(
					`https://it-crowd-challenge.herokuapp.com/brands?accesstoken=${localStorage.getItem(
						"token"
					)}`,
					form,
					{ withCredentials: true }
				)
				.then((res) => {
					alert(res.data);
					axios
						.get("https://it-crowd-challenge.herokuapp.com/brands")
						.then((res) => setBrands(res.data))
						.catch((error) => console.log(error));
					setForm(initialForm);
				})
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<form
				style={{
					margin: "0 auto",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit}
			>
				<label>
					Choose the brand to update
					<br />
					<Select name="brands" onChange={handleBrands}>
						<option value="default">Brands</option>
						{brands.map((b, i) => (
							<option key={i} value={b.id}>
								{b.name}
							</option>
						))}
					</Select>
				</label>
				<label>
					Brand Name
					<br />
					<Input
						type="text"
						placeholder="Brand name..."
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Logo URL
					<br />
					<Input
						type="text"
						placeholder="Logo url..."
						value={form.logo_url}
						name="logo_url"
						onChange={handleChange}
					/>
				</label>
				<Button disabled={form.id === null} type="submit">
					Update Brand
				</Button>
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

export default UpdateBrand;

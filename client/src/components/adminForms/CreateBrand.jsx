import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const initialForm = {
	name: "",
	logo_url: "",
};
const CreateBrand = () => {
	const [form, setForm] = useState(initialForm);
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.logo_url) {
			axios
				.post(
					`https://it-crowd-challenge.herokuapp.com/brands?accesstoken=${localStorage.getItem(
						"token"
					)}`,
					form,
					{ withCredentials: true }
				)
				.then((res) => {
					alert(res.data);
					setForm(initialForm);
				})
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<form
				onSubmit={handleSubmit}
				style={{
					margin: "0 auto",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
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
						name="logo_url"
						value={form.logo_url}
						onChange={handleChange}
					/>
				</label>
				<Button type="submit">Create Brand</Button>
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
export default CreateBrand;

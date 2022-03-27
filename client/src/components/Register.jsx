import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import styled from "styled-components";
const initialForm = {
	username: "",
	password: "",
};

const Register = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState(initialForm);
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.username && form.password) {
			axios
				.post(
					`https://it-crowd-challenge.herokuapp.com/admin/register`,
					form,
					{
						withCredentials: true,
					}
				)
				.then((res) => {
					alert(res.data);
					navigate("/login");
					setForm(initialForm);
				})
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<RegisterContainer>
			<Navbar />
			<h2>Register</h2>
			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<label>
					Username
					<br />
					<Input
						type="text"
						name="username"
						placeholder="Username..."
						value={form.username}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password
					<br />
					<Input
						type="password"
						name="password"
						placeholder="Password..."
						value={form.password}
						onChange={handleChange}
					/>
				</label>
				<Button
					type="submit"
				>
					Register
				</Button>
			</form>
			<Link style={{fontSize: "25px"}} to="/login">Already have account? Login</Link>
		</RegisterContainer>
	);
};

const RegisterContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
const Input = styled.input`
	min-width: 200px;
	max-width: 350px;
	height: 50px;
	border-radius: 5px;
	margin: 10px auto;
	border: 2px solid black;
	padding-left: 10px;
	font-size: 20px;
	box-sizing: border-box;
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
	min-width: 200px;
	max-width: 350px;
	&:hover {
		background-color: #008000;
	}
`;
export default Register;

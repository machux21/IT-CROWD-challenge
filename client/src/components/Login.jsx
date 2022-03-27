import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
const initialForm = {
	username: "",
	password: "",
};
const Login = () => {
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
					`https://it-crowd-challenge.herokuapp.com/admin/login`,
					form
				)
				.then((res) => {
					alert("Welcome!")
					localStorage.setItem("token", res.data.token);
					navigate("/");
				})
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<LoginContainer>
			<Navbar />
			<h2>Login</h2>

			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<label>
					Username:
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
					Password:
					<br />
					<Input
						type="password"
						name="password"
						placeholder="Password..."
						value={form.password}
						onChange={handleChange}
					/>
				</label>
				<Button type="submit" >
					Login
				</Button>
			</form>
			<Link  style={{fontSize: "25px"}}
			to="/register">Register</Link>
		</LoginContainer>
	);
};

const LoginContainer = styled.div`
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
export default Login;
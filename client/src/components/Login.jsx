import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
				.post(`http://localhost:3001/admin/login`, form)
				.then((res) => {
					console.log(res.data);
					localStorage.setItem("token", res.data.token);
					navigate("/");
				})
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<div style={{ width: "100%" }}>
			<Link
				to="/"
				style={{
					textDecoration: "none",
					color: "white",
					fontSize: "20px",
				}}
			>
				<button
					style={{
						backgroundColor: "#043927",
						borderRadius: "5px",
						color: "white",
						height: "60px",
						border: "none",
						margin: "10px",
						fontSize: "20px",
					}}
				>
					Back to home
				</button>
			</Link>

			<h3>Login</h3>

			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<label>
					Username
					<input
						type="text"
						name="username"
						placeholder="Username..."
						value={form.username}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						placeholder="Password..."
						value={form.password}
						onChange={handleChange}
					/>
				</label>
				<button
					type="submit"
					style={{
						backgroundColor: "#043927",
						borderRadius: "5px",
						color: "white",
						width: "100px",
						height: "40px",
						border: "none",
						margin: "10px",
						fontSize: "20px",
					}}
				>
					Login
				</button>
			</form>
			<Link to="/register">Register</Link>
		</div>
	);
};

export default Login;

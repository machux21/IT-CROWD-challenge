import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
				.post(`https://it-crowd-challenge.herokuapp.com/admin/register`, form, {
					withCredentials: true,
				})
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
	console.log(form);
	return (
		<div>
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

			<h2>Register</h2>
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
					Register
				</button>
			</form>
			<Link to="/login">Already have account? Login</Link>
		</div>
	);
};

export default Register;

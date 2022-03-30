import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const Admin = () => {
	const navigate = useNavigate();
	const Logout = () => {
		localStorage.clear();
		navigate("/");
	};
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", width: "100vw" }}>
				<AdminBar>
					<div style={{ margin: "0 auto" }}>
						<h3>Manage Brands</h3>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? "active" : "inactive"
									}
									to="/admin/createbrand"
								>
									Create brand
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? "active" : "inactive"
									}
									to="/admin/updatebrand"
								>
									Update brand
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<h3>Manage products</h3>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? "active" : "inactive"
									}
									to="/admin/createproduct"
								>
									Create product
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? "active" : "inactive"
									}
									to="/admin/updateproduct"
								>
									Update product
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/admin/deleteproduct"
									className={({ isActive }) =>
										isActive ? "active" : "inactive"
									}
								>
									Delete product
								</NavLink>
							</li>
						</ul>
					</div>
					<h3>Logout</h3>
					<button
						style={{
							backgroundColor: "#043927",
							borderRadius: "5px",
							color: "white",
							height: "40px",
							border: "none",
							margin: "10px",
							fontSize: "20px",
						}}
						onClick={Logout}
					>
						Logout
					</button>
				</AdminBar>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

const AdminBar = styled.nav`
	background-color: green;
	height: 100vh;
	width: 200px;
	text-align: center;
	div {
		width: 100%;
	}
	.active {
		display: block;
		width: 105%;
		height: 50px;
		background-color: #043827;
	}
	ul {
		list-style: none;
		margin: 0 auto;
		padding: 0;
		li {
			display: block;
			width: 100%;
			height: 50px;
			a {
				text-decoration: none;
				color: white;
				line-height: 50px;
				font-size: 18px;
			}
		}
	}
`;


export default Admin;

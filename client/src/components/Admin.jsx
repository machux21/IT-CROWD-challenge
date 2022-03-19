import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Admin = () => {
	const navigate = useNavigate();
	const Logout = () => {
		localStorage.clear();
		navigate("/");
	};
	return (
		<>
			<Navbar />
			<div style={{ display: "flex", width:"100vw"}}>
				<nav
					style={{
						backgroundColor: "green",
						height: "100vh",
						width: "200px",
						padding: "20px",
					}}
				>
					<div>
						<h5>Manage Brands</h5>
						<ul>
							<li>
								<Link to="/admin/createbrand">
									Create brand
								</Link>
							</li>
							<li>
								<Link to="/admin/updatebrand">
									Update brand
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5>Manage products</h5>
						<ul>
							<li>
								<Link to="/admin/createproduct">
									Create product
								</Link>
							</li>
							<li>
								<Link to="/admin/updateproduct">
									Update product
								</Link>
							</li>
							<li>
								<Link to="/admin/deleteproduct">
									Delete product
								</Link>
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
				</nav>
				<div style={{display: "flex", justifyContent: "center", width: "100%"}}>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Admin;

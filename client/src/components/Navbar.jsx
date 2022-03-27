import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
	return (
		<NavContainer
			style={{
				display: "flex",
				backgroundColor: "#043927",
				color: "#4CBB17",
				width: "100vw",
			}}
		>
			<ul
				style={{
					textDecoration: "none",
					display: "flex",
					justifyContent: "space-around",
					width: "200px",
					listStyle: "none"
				}}
			>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "active" : "inactive"
						}
					>
						Home
					</NavLink>
				</li>
				{localStorage.getItem("token") ? (
					<li>
						<NavLink
							to="/admin"
							className={({ isActive }) =>
								isActive ? "active" : "inactive"
							}
						>
							Admin
						</NavLink>
					</li>
				) : (
					<li>
						<NavLink
							to="/login"
							className={({ isActive }) =>
								isActive ? "active" : "inactive"
							}
						>
							Login
						</NavLink>
					</li>
				)}
			</ul>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	display: flex;
	background-color: #043827;
	width: 100vw;
	.active {
		display: block;
		border-bottom: 5px solid green;
		text-decoration: none;
		color: white;
		font-size: 30px;
		padding-bottom: 5px;

	}
	.inactive {
		border: none;
		text-decoration: none;
		color: white;
		font-size: 30px;
	}
`;

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div style={{display: "flex", backgroundColor: "#043927", color: "#4CBB17"}}>
			<ul style={{textDecoration: "none", display: "flex", justifyContent: "space-around", width: "200px"}}>
				<li>
					<Link  to="/" style={{textDecoration: "none", color: "white", fontSize: "20px"}}>Home</Link>
				</li>
				{localStorage.getItem("token") ? (
					<li >
						<Link to="/admin" style={{textDecoration: "none", color: "white", fontSize: "20px"}}>Admin</Link>
					</li>
				) : (
					<li>
						<Link to="/login" style={{textDecoration: "none", color: "white", fontSize: "20px"}}>Login</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar;

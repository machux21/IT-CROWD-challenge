import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Admin = () => {
	return (
		<>
		<nav>
			<div>
			<h5>Manage Brands</h5>
			<ul>
				<li><Link to="/admin/createbrand">Create brand</Link></li>
				<li><Link to="/admin/updatebrand">Update brand</Link></li>
			</ul>
			</div>
			<div>
			<h5>Manage products</h5>
			<ul>
				<li><Link to="/admin/createproduct">Create product</Link></li>
				<li><Link to="/admin/updateproduct">Update product</Link></li>
				<li><Link to="/admin/deleteproduct">Delete product</Link></li>
			</ul>
			</div>
		</nav>
		<div>
		<Outlet />
		</div>
		</>
	)
}

export default Admin
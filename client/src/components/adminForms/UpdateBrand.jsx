import React, { useEffect, useState } from "react";
import axios from "axios";
const initialForm = {
	id: null,
	name: "",
	logo_url: "",
};
const UpdateBrand = () => {
	const [form, setForm] = useState(initialForm);
	const [brands, setBrands] = useState([]);
	//FETCHING BRANDS
	useEffect(() => {
		axios
			.get("http://localhost:3001/brands")
			.then((res) => setBrands(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleBrands = (e) => {
		const { value } = e.target;
		if (value === "default") {
			return setForm(initialForm);
		}
		const brand = brands[value];
		console.log(brand);
		setForm({ id: brand.id, name: brand.name, logo_url: brand.logo_url });
	};
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.logo_url) {
			axios
				.put(`http://localhost:3001/brands/`, form)
				.then((res) => console.log(res.data))
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Choose the brand to update
					<select name="brands" onChange={handleBrands}>
						<option value="default">Brands</option>
						{brands.map((b, i) => (
							<option key={i} value={i}>
								{b.name}
							</option>
						))}
					</select>
				</label>
				<label>
					Brand Name
					<input
						type="text"
						placeholder="Brand name..."
						name="name"
						value={form.name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Logo URL
					<input
						type="text"
						placeholder="Logo url..."
						value={form.logo_url}
						name="logo_url"
						onChange={handleChange}
					/>
				</label>
				<button disabled={form.id === null} type="submit">
					Update Brand
				</button>
			</form>
		</div>
	);
};

export default UpdateBrand;

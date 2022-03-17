import React, { useEffect, useState } from "react";
import axios from "axios";
const initialForm = {
	name: "",
	description: "",
	image_url: "",
	price: "",
	brand: "",
};
const CreateProduct = () => {
	const [form, setForm] = useState(initialForm);
	const [brands, setBrands] = useState([]);
	//FETCHING BRANDS
	useEffect(() => {
		axios
			.get("http://localhost:3001/brands")
			.then((res) => setBrands(res.data))
			.catch((error) => console.log(error));
	}, []);
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.description && form.image_url && form.price && form.brand) {
			axios
				.post("http://localhost:3001/products", form)
				.then((res) => console.log(res.data))
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	console.log(form);
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						placeholder="Name..."
						name="name"
						onChange={handleChange}
						value={form.name}
					/>
				</label>
				<label>
					Image
					<input
						type="text"
						placeholder="Image url..."
						name="image_url"
						onChange={handleChange}
						value={form.image_url}
					/>
				</label>
				<label>
					Description
					<textarea
						name="description"
						onChange={handleChange}
						value={form.description}
						cols="30"
						rows="10"
					>Description...</textarea>
				</label>
				<label>
					Price
					<input
						type="number"
						placeholder="Price..."
						name="price"
						onChange={handleChange}
						value={form.price}
					/>
				</label>
				<label>
					Choose a brand
					<select name="brand" onChange={handleChange}>
						<option value="default">Brands</option>
						{brands.map((b, i) => (
							<option key={i} value={b.name}>
								{b.name}
							</option>
						))}
					</select>
				</label>
				<button type="submit">Create product</button>
			</form>
		</>
	);
};

export default CreateProduct;

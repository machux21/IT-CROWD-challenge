import React, { useEffect, useState } from "react";
import axios from "axios";
const initialForm = {
	id: "",
	name: "",
	description: "",
	image_url: "",
	price: "",
	brand: "",
};
const UpdateProduct = () => {
	const [form, setForm] = useState(initialForm);
	const [products, setProducts] = useState([]);
	
	//FETCHING PRODUCTS
	useEffect(() => {
		axios
			.get("https://it-crowd-challenge.herokuapp.com/products")
			.then((res) => setProducts(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleBrands = (e) => {
		const { value } = e.target;
		const product = products.find((p) => p.id == value);
		const { id, name, description, image_url, price, Brand } = product;
		setForm({ id, name, description, image_url, price, brand: Brand.name });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			form.id &&
			form.name &&
			form.description &&
			form.image_url &&
			form.price &&
			form.brand
		) {
			axios
				.put(
					`https://it-crowd-challenge.herokuapp.com/products/${
						form.id
					}?accesstoken=${localStorage.getItem("token")}`,
					form,
					{
						withCredentials: true,
					}
				)
				.then((res) => alert(res.data))
				.catch((error) => console.log(error));
		} else {
			alert("All fields must be completed");
		}
	};
	console.log(form);
	return (
		<>
			<form 
				style={{
					margin: "0 auto",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit}>
				<label>
					Choose a product
					<select name="products" onChange={handleBrands}>
						<option value="default">Products</option>
						{products.map((p, i) => (
							<option key={i} value={p.id}>
								{p.name}
							</option>
						))}
					</select>
				</label>
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
					<br/>
					<textarea
						name="description"
						onChange={handleChange}
						value={form.description}
						cols="30"
						rows="10"
					>
						Description...
					</textarea>
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
				<p>Brand: {form.brand}</p>
				<button type="submit">Update product</button>
			</form>
		</>
	);
};

export default UpdateProduct;

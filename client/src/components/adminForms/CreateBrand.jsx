import React, { useState } from "react";
import axios from 'axios';
const initialForm = {
	name: "",
	logo_url: "",
};
const CreateBrand = () => {
	const [form, setForm] = useState(initialForm);
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e)=>{
		e.preventDefault();
		if(form.name && form.logo_url){
		axios.post("http://localhost:3001/brands", form)
		.then(res => console.log(res.data))
		.catch(error => console.log(error));
		}else{
			alert("All fields must be completed");
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
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
						name="logo_url"
						value={form.logo_url}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Create Brand</button>
			</form>
		</div>
	);
};

export default CreateBrand;

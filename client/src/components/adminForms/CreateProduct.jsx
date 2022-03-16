import React, {useEffect} from 'react'
const initialForm = {
	name: "",
	image_url: "",
	price: null,
	brand: null
}
const CreateProduct = () => {
	const [form, setForm] = useState(initialForm);
	return (
		<div>
			Create Product
		</div>
	)
}

export default CreateProduct
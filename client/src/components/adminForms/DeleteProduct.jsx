import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DeleteProducts = () => {
	const [products, setProducts] = useState([])
 	useEffect(() => {
 		axios.get('http://localhost:3001/products')
		.then(res => setProducts(res.data))
		.catch(error => console.log(error))
 	}, [])
 	const handleClick = (id)=>{
 		axios.delete(`http://localhost:3001/products/${id}`)
 		.then(res => {
 			console.log(res.data)
 			setProducts(products.filter( p => p.id !== id))
 		})
 		.catch(error => console.log(error));
 		
 	}
	return (
		<div>
			<ul>
				{
					products.map((p, i) =>{
						return(
						<li key={i}>
						<div>
						<p>{p.name}</p>
						<button onClick={()=>handleClick(p.id)}>Delete</button>
						</div>	
						</li>)
					})
				}
			</ul>
		</div>
	)
}

export default DeleteProducts
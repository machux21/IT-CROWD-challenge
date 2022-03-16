import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from './Card';
const Home = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:3001/products')
		.then(res => setProducts(res.data))
		.catch(error => console.log(error))
	}, [])
	console.table(products)
	return (
		<Container>
			{
				products.map((p, i) =>(
					<Link key={i} to={`detail/${p.id}`}>
					<Card 
						
						name={p.name}
						image={p.image_url}
						price={p.price}
						brand={p.Brand.name}
						brandLogo={p.Brand.logo_url}
					/>
					</Link>
					))
			}
		</Container>
	)
}
const Container = styled.div`
	width: 100vw;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
`
export default Home
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";
import Pagination from "./Pagination";
const Home = () => {
	//FETCHING PRODUCTS
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3001/products")
			.then((res) => setProducts(res.data))
			.catch((error) => console.log(error));
	}, []);

	//PAGINATION
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 1;
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);
	const paginate = (number) => {
		setCurrentPage(number);
	};

	

	return (
		<>
			<Container>
				{currentProducts.map((p, i) => (
					<Link key={i} to={`detail/${p.id}`}>
						<Card
							name={p.name}
							image={p.image_url}
							price={p.price}
							brand={p.Brand.name}
							brandLogo={p.Brand.logo_url}
						/>
					</Link>
				))}
			</Container>
			<Pagination
				paginate={paginate}
				productsLength={products.length}
				productsPerPage={productsPerPage}
			/>
		</>
	);
};
const Container = styled.div`
	width: 100vw;
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
`;
export default Home;

import React, { useEffect } from "react";

const Pagination = ({ productsLength, paginate, productsPerPage }) => {
	
	useEffect(() => {
		paginate(1);
	}, [productsLength]);
	const numberOfPages = [];
	for (let i = 1; i <= Math.ceil(productsLength / productsPerPage); i++) {
		numberOfPages.push(i);
	}
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{numberOfPages &&
				numberOfPages.map((n, i) => {
					return (
						<button
							key={i}
							style={{
								backgroundColor: "green",
								border: "1 px solid black",
								color: "white",
								width: "30px",
								height: "30px",
							}}
							key={n}
							onClick={() => {
								paginate(n);
							}}
						>
							{n}
						</button>
					);
				})}
		</div>
	);
};

export default Pagination;

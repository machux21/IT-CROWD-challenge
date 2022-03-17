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
		<div>
			{numberOfPages &&
				numberOfPages.map((n) => {
					return (
						<button
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

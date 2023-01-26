import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
	const [product, setProduct] = useState({});
	let { productID } = useParams();
	useEffect(() => {
		fetch(`http://localhost:9000/products/${productID}`)
			.then((res) => res.json())
			.then((product) => {
				console.log(product);
				setProduct(product);
			});
	}, []);
	return (
		<>
			<h1>{product.title}</h1>
            <h2>{product.price} $</h2>
            <h3>{product.description}</h3>
		</>
	);
}

export default ProductDetails;

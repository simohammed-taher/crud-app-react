import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductEdit  () {
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
      <h1>Edit porteclé titre  </h1><br></br>
      <h4>{product.title} </h4>
    </>
  )
}

export default ProductEdit

import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Products.css';
import Swal from 'sweetalert2';
function Products() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getAllProducts();
	}, []);
	const getAllProducts = () => {
		fetch('http://localhost:9000/products')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
	};

	const deleteProduct = (product) => {
		Swal.fire({
			title: `Are You sure to Delete ${product.title} ? `,
			showCancelButton: true,
		}).then((data) => {
			if (data.isConfirmed) {
				fetch(`http://localhost:9000/products/${product.id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						getAllProducts();
					});
			}
		});
	};

	return (
		<>
			<h1>Product page</h1>
			<Link to={'/products/add'} className=' btn btn-success mt-3'>
				Add New Product
			</Link>
			<table class='table table-striped mt-5 products-table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						{/* <th>Description</th> */}
						<th>Price</th>
						<th>Operations</th>
					</tr>
				</thead>
				<tbody>
					{products.map((products) => {
						return (
							<tr key={products.id}>
								<td>{products.id}</td>
								<td>{products.title}</td>
								<td>{products.description.slice(0, 20)}...</td>
								<td>{products.price}</td>
								<td>
									<button
										className='btn btn-danger btn-sm'
										onClick={() => deleteProduct(products)}
									>
										Delete
									</button>
									<Link
										to={`/products/${products.id}`}
										className='btn btn-info btn-sm'
									>
										View
									</Link>
									
									<Link to={`/products/Edit/${products.id}`} className='btn btn-primary btn-sm'>Edit</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Products;

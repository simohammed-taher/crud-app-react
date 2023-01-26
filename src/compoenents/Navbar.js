import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						Logo
					</Link>
					
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav  mb-2 ms-auto '>
							<li className='nav-item'>
                            <Link className='navbar-brand' to='/'>
						Home
					</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Navbar;

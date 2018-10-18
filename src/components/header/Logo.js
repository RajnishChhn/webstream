import React from 'react';
import logo from '../../logo.png'

const Logo = () => {
  return (
		<ul className="flex-center">
			<a href="#">
				<li className="flex-item">
					<img src={logo} className="Logo"></img>
				</li>
				<li className="flex-item">
					<img src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" className="moive-db"></img>
				</li>
			</a>
		</ul>
  );
}

export default Logo;

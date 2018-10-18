import React from 'react';
import EditMovie from './EditMovie';
import '../style.scss';

const Hero = ({editMode, selected}) => {

	if (editMode) {
		return (
				<div>
						lasigdfba;slbvkasdh
				</div>
		);
	} else {
		return (
			<div id="hero" className="Hero" style={{backgroundImage: 'url(' + selected.backdrop + ')'}}>
				<div className="content">
					<h1>{selected.title}</h1>
					<h2>{selected.year}</h2>
					<h3>{selected.votes}</h3>
					<p>{selected.description}</p>
				</div>
				<div className="overlay"></div>
			</div>
		)
	}
}

export default Hero;

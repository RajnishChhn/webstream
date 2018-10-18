import React, { PureComponent } from 'react';

const Navigation = () =>  {
  return(
		<ul className="flex-left">
      <div id="navigator" className="Navigation" >
        <nav>
          <ul>
						<div className="button-wrapper">
	            <a href="#" className="Button" data-primary={true}>+ Add New Movie</a>
	          </div>
          </ul>
        </nav>
      </div>
		</ul>
  )
}


export default Navigation;

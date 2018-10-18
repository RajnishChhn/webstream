import React from 'react';

const UserProfile = () => {
  return(
		<ul className="flex-right">
		<li className="flex-item">
      <div className="UserProfile">
        <div className="User">
          <div className="name">
						<a href="https://www.linkedin.com/in/tomer-levi/" target="_blank">
							Tomer Levi
						</a>
					</div>
          <div className="image">
            <img src="https://media.licdn.com/dms/image/C4E03AQGKCR07Q4G2ZA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=FqDWYLDE2cjx4IJ3utVSAj-3-ixbM7R7tMUbp-Am3pE"
						alt="profile"/>
          </div>
        </div>
      </div>
			</li>
		</ul>
  )
}

export default UserProfile;

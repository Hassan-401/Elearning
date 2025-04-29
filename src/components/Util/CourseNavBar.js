import React from "react";

const CourseNavBar = () => {
	return (
		<div className="course-navbar-container">
			<div className="course-navbar">
				<i class="fa-solid fa-graduation-cap">
					<span>|</span>
				</i>
				<h6>Learn HTML for Beginners!</h6>
			</div>
			<div className="button-container">
				<button>Share</button>
				<i class="fa-solid fa-share-nodes"></i>
			</div>
		</div>
	);
};

export default CourseNavBar;

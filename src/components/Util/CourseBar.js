import React from "react";

const CourseBar = ({ title, time }) => {
	return (
		<div className="course-details-container">
			<input type="checkbox" />
			<div className="details">
				<h3>{title}</h3>
				<div className="time">
					<i class="fa-brands fa-youtube"></i>
					<p>{time}</p>
				</div>
			</div>
		</div>
	);
};

export default CourseBar;

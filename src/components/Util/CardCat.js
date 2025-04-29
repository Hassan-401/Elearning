import React from "react";
import cat1 from "../../images/cat1.jpeg";
import { Rating } from "@mui/material";
const CardCat = ({ image }) => {
	return (
		<div>
			<div className="course-card transition-transform duration-300 hover:scale-105">
				<img src={image} alt="" />
				<h3>Python - The Complete Course</h3>
				<p>Jonas Schmedtman</p>
				<div className="rating-container">
					<div>4.3</div>
					<Rating name="size-small" defaultValue={2} precision={0.5} />
				</div>
				<div className="price">
					<span>249.99$</span>
					<del>699.99$</del>
				</div>
			</div>
		</div>
	);
};

export default CardCat;

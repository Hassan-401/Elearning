import React from "react";
import card1 from "../../images/cat1.jpeg";
import card2 from "../../images/cat2.jpeg";
import card3 from "../../images/cat3.jpeg";
import card4 from "../../images/cat4.jpeg";
import card5 from "../../images/cat5.png";
import CardCat from "./CardCat";
import { Link } from "react-router-dom";
const CategoriesSection = ({ title }) => {
	return (
		<div>
			<h1 className="my-4 fw-bold fs-4">{title}</h1>
			<div className="card-container">
				<Link to={"/course"} className="text-decoration-none text-dark">
					<CardCat image={card1} />
				</Link>
				<Link to={"/course"} className="text-decoration-none text-dark">
					<CardCat image={card2} />
				</Link>
				<Link to={"/course"} className="text-decoration-none text-dark">
					<CardCat image={card3} />
				</Link>
				<Link to={"/course"} className="text-decoration-none text-dark">
					<CardCat image={card4} />
				</Link>
				<Link to={"/course"} className="text-decoration-none text-dark">
					<CardCat image={card5} />
				</Link>
			</div>
		</div>
	);
};

export default CategoriesSection;

import React from "react";
import Navbar from "../../components/Util/Navbar";
import card1 from "../../images/cat1.jpeg";
import card2 from "../../images/cat2.jpeg";
import card3 from "../../images/cat3.jpeg";
import card4 from "../../images/cat4.jpeg";
import card5 from "../../images/cat5.png";
import CardCat from "../../components/Util/CardCat";
import Footer from "../../components/Util/Footer";
const CoursesPage = () => {
	return (
		<div>
			<Navbar />
			<div className="container my-5">
				<div>
					<h1 className="my-4 fw-bold fs-4">Web Development</h1>
					<div className="card-container">
						<CardCat image={card1} />
						<CardCat image={card2} />
						<CardCat image={card3} />
						<CardCat image={card4} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
					</div>
				</div>{" "}
				<hr />
				<div>
					<h1 className="my-4 fw-bold fs-4">Web Development</h1>
					<div className="card-container">
						<CardCat image={card1} />
						<CardCat image={card2} />
						<CardCat image={card3} />
						<CardCat image={card4} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
					</div>
				</div>
				<hr />
				<div>
					<h1 className="my-4 fw-bold fs-4">Web Development</h1>
					<div className="card-container">
						<CardCat image={card1} />
						<CardCat image={card2} />
						<CardCat image={card3} />
						<CardCat image={card4} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
						<CardCat image={card5} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CoursesPage;

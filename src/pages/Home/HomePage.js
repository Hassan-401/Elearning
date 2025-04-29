import React from "react";
import CarouselComonent from "../../components/Home/Carousel";
import Navbar from "../../components/Util/Navbar";
import CategoriesSection from "../../components/Util/CategoriesSection";
import Inviting from "../../components/Home/Inviting";
import TopicPicked from "../../components/Home/TopicPicked";
import Footer from "../../components/Util/Footer";

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<CarouselComonent />
			<div className="container">
				<Inviting />
				<CategoriesSection title={"Recommended for you"} />
				<CategoriesSection title={"Most Popular"} />
				<TopicPicked />
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;

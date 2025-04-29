import React from "react";
import topic from "../../images/topic.jpg";
const TopicPicked = () => {
	return (
		<div>
			<h1 className="my-4 fw-bold fs-4">Our top pick for you</h1>

			<div className="topic-contaienr">
				<div className="overflow-hidden">
					<img src={topic} alt="" />
				</div>
				<div className="course-data-contaienr">
					<div className="course-data">
						<h1>React Native - The Practical Guide [2025]</h1>
						<p>
							Use React Native and your React knowledge to build native
							iOS and Android Apps - incl. Push Notifications, Hooks,
							Redux
						</p>
						<div className="author">
							By Academind by Maximilian Schwarzmüller and 1 other
						</div>
					</div>
					<div>
						<i className="evaluation">4.0</i>
						<i class="fa-solid fa-star stars"></i>
						<i class="fa-solid fa-star stars"></i>
						<i class="fa-solid fa-star stars"></i>
						<i class="fa-solid fa-star stars"></i>
						<i class="fa-regular fa-star"></i>
						<i style={{ color: "#777", marginLeft: "10px" }}>(290)</i>
					</div>
					<h3>1,099.99$</h3>
				</div>
			</div>
		</div>
	);
};

export default TopicPicked;

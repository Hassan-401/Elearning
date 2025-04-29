import React from "react";
import Navbar from "../../components/Util/Navbar";
import Footer from "../../components/Util/Footer";
import aboutus from "../../images/aboutus.jpg";
const AboutUsPage = () => {
	return (
		<div>
			<Navbar />
			<div className="about-container">
				<div>
					<section className="about-section">
						<h2>Our Mission</h2>
						<p>
							To empower individuals through quality online education,
							making learning engaging, effective, and available to
							anyone, anywhere.
						</p>
					</section>

					<section className="about-section">
						<h2>What We Offer</h2>
						<ul>
							<li>
								<span>Expert-Led Courses:</span> Learn from industry
								professionals with real-world experience.
							</li>
							<li>
								<span>Global Community:</span> Join thousands of
								learners and educators from around the world.
							</li>
							<li>
								<span>Career-Focused Content:</span> Get the skills you
								need to land your dream job or start your own venture.
							</li>
							<li>
								<span>Learn Anytime, Anywhere:</span> Access your
								courses on any device — desktop, tablet, or mobile.
							</li>
						</ul>
					</section>

					<section className="about-section">
						<h2>Why Choose E-LEARNING?</h2>
						<p>
							Because we’re not just a platform — we’re a partner in your
							learning journey. Whether you're a beginner or a pro, our
							courses are designed to meet you where you are and take you
							where you want to go.
						</p>
					</section>
				</div>
				<img src={aboutus} />
			</div>
			<Footer />
		</div>
	);
};

export default AboutUsPage;

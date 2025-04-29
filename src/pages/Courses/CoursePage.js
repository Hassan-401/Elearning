import React from "react";

import vid1 from "../../images/vid1.mp4";
import CourseBar from "../../components/Util/CourseBar";
import Footer from "../../components/Util/Footer";
import CourseNavBar from "../../components/Util/CourseNavBar";

const CoursePage = () => {
	return (
		<div>
			<CourseNavBar />
			<div className="all-videos">
				<div className="video-container">
					<video src={vid1} controls />
					<div className="course-details">
						<hr />

						<div className="course-data">
							<h6 className="descreption">By the numbers</h6>
							<div className="numbers">
								<div>
									<div>Skill Level: Beginner Level</div>
									<div>Students: 736</div>
									<div>Languages: English</div>
									<div>Captions: Yes</div>
								</div>
								<div>
									<div>Lectures: 19</div>
									<div>Video: 1.5 hours</div>
								</div>
							</div>
						</div>

						<hr />
						<div className="course-data">
							<h6 className="descreption">Features</h6>
							<div className="middle-content">
								<div>
									Available on <span>iOS</span> and{" "}
									<span> Android</span>
								</div>
							</div>
						</div>
						<hr />
						<div className="course-data">
							<h6 className="descreption">Description</h6>
							<div className="end-content">
								<p>
									Welcome to the “Learn HTML for Beginners” course!
									This course is designed for those new to web
									development and seeks to demystify the building
									blocks of the web. This course is designed for anyone
									eager to dive into the world of web development,
									regardless of prior experience. Over the duration of
									the course, you will learn the foundational elements
									of HTML, the standard markup language used to create
									web pages.
								</p>
								<p>
									Starting with the basics, you'll explore essential
									topics such as tags, elements, and attributes, as
									well as how to structure a simple webpage. We'll
									guide you through creating headings, paragraphs,
									lists, links, images, and multimedia content,
									equipping you with the skills needed to build
									engaging and interactive websites.
								</p>
								<p>
									You'll also discover best practices for writing
									semantic HTML, which enhances accessibility and
									improves SEO (Search Engine Optimization). By the end
									of the course, you will have a solid understanding of
									HTML and the confidence to create your own web pages
									from scratch.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="videos">
					<h4 className="mb-4 fs-5 mx-3">Course Content</h4>
					<CourseBar title={"1. What is HTML?"} time={"3min"} />
					<CourseBar title={"2. What is HTML?"} time={"1min"} />
					<CourseBar title={"3. What is HTML?"} time={"2min"} />
					<CourseBar title={"4. What is HTML?"} time={"3min"} />
					<CourseBar title={"5. What is HTML?"} time={"4min"} />
					<CourseBar title={"6. What is HTML?"} time={"5min"} />
					<CourseBar title={"7. What is HTML?"} time={"6min"} />
					<CourseBar title={"8. What is HTML?"} time={"2min"} />
					<CourseBar title={"9. What is HTML?"} time={"3min"} />
					<CourseBar title={"10. What is HTML?"} time={"4min"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CoursePage;

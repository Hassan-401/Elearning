import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../../images/carousel1.png";
import Carousel2 from "../../images/carousel2.jpg";
import Carousel3 from "../../images/carousel3.jpg";
function CarouselComonent() {
	return (
		<Carousel data-bs-theme="dark">
			<Carousel.Item>
				<img className="d-block w-100" src={Carousel1} alt="First slide" />
				<Carousel.Caption className="carousel-caption">
					<h1>Slow and steady</h1>
					<p>
						Try learning just 5–10 minutes a day. Continue your course and
						reach your peak potential.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Carousel2} alt="Second slide" />
				<Carousel.Caption className="carousel-caption">
					<h1>Slow and steady</h1>
					<p>
						Try learning just 5–10 minutes a day. Continue your course and
						reach your peak potential.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Carousel3} alt="Third slide" />
				<Carousel.Caption className="carousel-caption">
					<h1>Slow and steady</h1>
					<p>
						Try learning just 5–10 minutes a day. Continue your course and
						reach your peak potential.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselComonent;

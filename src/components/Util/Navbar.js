import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="navbar-comp">
			<Link to={"/"} className="text-decoration-none text-dark">
				<i class="fa-solid fa-graduation-cap logo"></i>
			</Link>
			<ul>
				<Link to={"/"} className="text-decoration-none text-dark">
					<li>Home</li>
				</Link>
				<Link to={"/courses"} className="text-decoration-none text-dark">
					<li>Courses</li>
				</Link>
				<Link to={"/contact-us"} className="text-decoration-none text-dark">
					<li>Contact</li>
				</Link>
				<Link to={"/about-us"} className="text-decoration-none text-dark">
					<li>About us</li>
				</Link>
				<Link to={"/login"} className="text-decoration-none text-dark">
					<button>Login</button>
				</Link>
				<Link to={"/register"} className="text-decoration-none text-dark">
					<button>Sign up</button>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;

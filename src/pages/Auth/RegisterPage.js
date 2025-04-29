import React from "react";
import Login from "../../images/Login.png";
import { Link } from "react-router-dom";

export default function RegisterPage() {
	return (
		<div className="container-home">
			<div className="left-section">
				<div className="form-box">
					<h1>Create an account</h1>
					<p className="subtitle">Please fill in your details</p>

					<label>Full Name</label>
					<input
						type="text"
						placeholder="Enter your name"
						className="input"
					/>

					<label>Email address</label>
					<input
						type="email"
						placeholder="Enter your email"
						className="input"
					/>

					<label>Password</label>
					<input
						type="password"
						placeholder="Create a password"
						className="input"
					/>

					<button className="btn">Sign up</button>

					<div className="divider">or</div>

					<button className="google-btn">
						<img
							src="https://www.svgrepo.com/show/475656/google-color.svg"
							alt="Google"
							className="google-icon"
						/>
						Sign up with Google
					</button>

					<p className="signup-text">
						Already have an account?{" "}
						<Link to={"/login"} className="signup-button">
							{" "}
							Sign in
						</Link>
					</p>
				</div>
			</div>

			<div className="right-section">
				<img src={Login} alt="Illustration" className="illustration" />
			</div>
		</div>
	);
}

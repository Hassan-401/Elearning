import React from "react";
import Login from "../../images/Login.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<div className="container-home">
			<div className="left-section">
				<div className="form-box">
					<h1>Welcome back</h1>
					<p className="subtitle">Please enter your details</p>

					<label>Email address</label>
					<input
						type="email"
						placeholder="Enter your email"
						className="input"
					/>

					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						className="input"
					/>

					<div className="options">
						<a href="#" className="forgot">
							Forgot password
						</a>
					</div>
					<Link to={"/"}>
						<button className="btn">Sign in</button>
					</Link>

					<div className="divider">or</div>

					<button className="google-btn">
						<img
							src="https://www.svgrepo.com/show/475656/google-color.svg"
							alt="Google"
							className="google-icon"
						/>
						Sign in with Google
					</button>

					<p className="signup-text">
						Don’t have an account?
						<Link to={"/register"} className="signup-button">
							{" "}
							Sign up
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

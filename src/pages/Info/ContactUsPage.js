import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Util/Navbar";
import Footer from "../../components/Util/Footer";

const ContactUsPage = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_8qz03g8", // Replace with your EmailJS service ID
				"template_05itoja", // Replace with your EmailJS template ID
				form.current,
				"W0O_9nrfmqyPPIDO6" // Replace with your EmailJS public key
			)
			.then(
				() => {
					alert("Message sent successfully!");
					form.current.reset();
				},
				(error) => {
					alert("Failed to send message. Please try again.");
					console.log(error.text);
				}
			);
	};

	return (
		<div>
			<Navbar />
			<div>
				<div className="about-header">
					<div className="contact-container">
						<h1>GET IN TOUCH</h1>
						<div className="infos">
							<div className="info">
								<i class="fa-solid fa-location-dot"></i>
								<h2>Address</h2>
								<p>600 Harrison Street</p>
								<p>3rd Floor, United States</p>
							</div>
							<div className="info">
								<i class="fa-solid fa-phone"></i>
								<h2>Phone</h2>
								<p>+20123456789</p>
							</div>
							<div className="info">
								<i class="fa-solid fa-envelope"></i>
								<h2>Email</h2>
								<p>Elearning@gmail.com</p>
							</div>
						</div>
					</div>
				</div>

				<div className="form-container  contact-container">
					<div className="form-text">
						<h1>Message Us</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
							aliquam eos tempore rerum velit consequuntur eligendi
							temporibus? Architecto rem illo ad in.
						</p>
					</div>
					<form ref={form} onSubmit={sendEmail} className="contact-form">
						<label htmlFor="user_email">Your Email</label>
						<input
							type="email"
							name="user_email"
							id="user_email"
							required
						/>

						<label htmlFor="message">Your Message</label>
						<textarea name="message" id="message" rows="5" required />

						<button type="submit">Send Message</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUsPage;

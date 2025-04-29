import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
	const footerSectionsTop = [
		{
			title: "Certifications by Issuer",
			links: [
				"Amazon Web Services (AWS) Certifications",
				"Six Sigma Certifications",
				"Microsoft Certifications",
				"Cisco Certifications",
				"Tableau Certifications",
				"See all Certifications",
			],
		},
		{
			title: "Web Development",
			links: [
				"Web Development",
				"JavaScript",
				"React JS",
				"Angular",
				"Java",
			],
		},
		{
			title: "IT Certifications",
			links: [
				"Amazon AWS",
				"AWS Certified Cloud Practitioner",
				"AZ-900: Microsoft Azure Fundamentals",
				"AWS Certified Solutions Architect - Associate",
				"Kubernetes",
			],
		},
		{
			title: "Leadership",
			links: [
				"Leadership",
				"Management Skills",
				"Project Management",
				"Personal Productivity",
				"Emotional Intelligence",
			],
		},
		{
			title: "Certifications by Skill",
			links: [
				"Cybersecurity Certification",
				"Project Management Certification",
				"Cloud Certification",
				"Data Analytics Certification",
				"HR Management Certification",
				"See all Certifications",
			],
		},
		{
			title: "Data Science",
			links: [
				"Data Science",
				"Python",
				"Machine Learning",
				"ChatGPT",
				"Deep Learning",
			],
		},
		{
			title: "Communication",
			links: [
				"Communication Skills",
				"Presentation Skills",
				"Public Speaking",
				"Writing",
				"PowerPoint",
			],
		},
		{
			title: "Business Analytics & Intelligence",
			links: [
				"Microsoft Excel",
				"SQL",
				"Microsoft Power BI",
				"Data Analysis",
				"Business Analysis",
			],
		},
	];

	const footerSectionsBottom = [
		{
			title: "About",
			links: ["About us", "Careers", "Contact us", "Blog", "Investors"],
		},
		{
			title: "Discovery E-LEARNING",
			links: [
				"Get the app",
				"Teach on E-LEARNING",
				"Plans and Pricing",
				"Affiliate",
				"Help and Support",
			],
		},
		{
			title: "E-LEARNING for Business",
			links: ["E-LEARNING Business"],
		},
		{
			title: "Legal & Accessibility",
			links: [
				"Accessibility statement",
				"Privacy policy",
				"Sitemap",
				"Terms",
			],
		},
	];

	return (
		<footer className="bg-dark text-light pt-5">
			<div className="container">
				<h5 className="mb-4 fw-bold">
					Explore top skills and certifications
				</h5>
				<div className="row">
					{footerSectionsTop.map((section, index) => (
						<div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
							<h6 className="fw-bold mb-2">{section.title}</h6>
							<ul className="list-unstyled">
								{section.links.map((link, idx) => (
									<li key={idx} className="mb-1">
										<a
											href="#"
											className="text-light text-decoration-none small"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<hr className="border-secondary " />
				<div className="row">
					{footerSectionsBottom.map((section, index) => (
						<div className="col-6 col-md-3 mb-4" key={index}>
							<h6 className="fw-bold mb-2">{section.title}</h6>
							<ul className="list-unstyled">
								{section.links.map((link, idx) => (
									<li key={idx} className="mb-1">
										<a
											href="#"
											className="text-light text-decoration-none small"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="d-flex justify-content-between border-top pt-3 mt-3 small">
					<div>
						<span className="fw-bold">E-LEARNING</span> © 2025 E-LEARNING, Inc.
					</div>
					<div>Cookie settings</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

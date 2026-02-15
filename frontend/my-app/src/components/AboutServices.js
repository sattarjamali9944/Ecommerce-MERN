import React from "react";
import { Link } from "react-router-dom";

const AboutServices = () => {
	const services = [
		{
			icon: "fa-codepen",
			title: "Let your footwear do the talking",
			description:
				"Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.",
			link: "#link",
		},
		{
			icon: "fa-mobile",
			title: "Trendy celebrity collections",
			description:
				"Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.",
			link: "#link",
		},
		{
			icon: "fa-hourglass",
			title: "Animation",
			description:
				"Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.",
			link: "#link",
		},
		{
			icon: "fa-modx",
			title: "Vast collection of Sports shoes",
			description:
				"Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.",
			link: "#link",
		},
		{
			icon: "fa-bar-chart",
			title: "Uniquely designed collection",
			description:
				"Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.",
			link: "#link",
		},
		{
			icon: "fa-shopping-bag",
			title: "High Quality Footwear",
			description:
				"Lorem sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia.",
			link: "#link",
		},
	];

	return (
		<section className="w3l-services-6">
			<div className="services-grids-6 py-5">
				<div className="container py-lg-5">
					<div className="row w3-icon-grid-gap1">
						{services.map((service, index) => (
							<div
								key={index}
								className="col-md-6 w3-icon-grid1">
								<Link to={service.link}>
									<span
										className={`fa ${service.icon}`}
										aria-hidden="true"></span>
									<h3>{service.title}</h3>
									<div className="clearfix"></div>
								</Link>
								<p>{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutServices;

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="jumbotron bg-light rounded-3 m-5 p-5">
			<h1 className="display-5 fw-bold">Pluralsight Administration</h1>
			<p className="col-md-8 fs-4">
				React, Redux and React Router for ultra-respons ive web apps.
				Using a series of utilities, you can create this jumbotron, just
				like the one in previous versions of Bootstrap.
			</p>
			<Link to="about" className="btn btn-primary btn-lg">
				Learn more
			</Link>
		</div>
	);
};

export default HomePage;

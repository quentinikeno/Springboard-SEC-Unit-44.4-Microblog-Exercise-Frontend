import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="hero is-primary">
			<div className="hero-body">
				<h1 className="title">Microblog</h1>
				<p className="subtitle">
					Get started blogging on this lightweight platform.
				</p>
				<div>
					<Link to="/">Blog</Link>
					<Link to="/new">Add a new post</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;

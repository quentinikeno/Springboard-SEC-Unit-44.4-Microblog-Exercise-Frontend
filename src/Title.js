import { Link } from "react-router-dom";

const Title = ({ post }) => {
	const { id, title, description } = post;
	return (
		<div className="column is-half">
			<div className="box">
				<h4 className="title is-4">
					<Link to={`/${id}`}>{title}</Link>
				</h4>
				<p className="is-italic">{description}</p>
			</div>
		</div>
	);
};

export default Title;
import { Link } from "react-router-dom";
import useUpdateVote from "../hooks/useUpdateVote";

const Title = ({ postId, title, description, votes }) => {
	const handleVote = useUpdateVote(postId);
	return (
		<div className="column is-half">
			<div className="card">
				<div className="card-content">
					<h4 className="title is-4">
						<Link to={`/${postId}`}>{title}</Link>
					</h4>
					<p className="subtitle">{description}</p>
				</div>
				<footer className="card-footer">
					<div className="card-footer-item">
						<button
							className="button is-ghost"
							onClick={() => handleVote("up")}
						>
							<i className="fa-solid fa-chevron-up fa-lg"></i>
						</button>
					</div>
					<span className="card-footer-item">{votes}</span>
					<div className="card-footer-item">
						<button
							className="button is-ghost"
							onClick={() => handleVote("down")}
						>
							<i className="fa-solid fa-chevron-down fa-lg"></i>
						</button>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Title;

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostFromAPI } from "../../store/postsSlice";
import CommentsSection from "../comments/CommentsSection";

const PostContent = ({ postId, post, toggleIsEditing }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { title, description, body, comments } = post;

	const handleDelete = () => {
		dispatch(deletePostFromAPI(postId));
		navigate("/");
	};

	return (
		<section className="section">
			<div className="is-flex is-justify-content-space-between">
				<div>
					<h2 className="title is-2">{title}</h2>
					<p className="subtitle is-4">{description}</p>
				</div>
				<div>
					<button
						className="button is-info mr-3"
						onClick={toggleIsEditing}
					>
						Edit <i className="fa-solid fa-pen-to-square ml-3"></i>
					</button>
					<button className="button is-danger" onClick={handleDelete}>
						Delete <i className="fa-solid fa-trash ml-3"></i>
					</button>
				</div>
			</div>
			<div className="my-3">
				<p>{body}</p>
			</div>
			<hr />
			<CommentsSection postId={postId} comments={comments} />
		</section>
	);
};

export default PostContent;

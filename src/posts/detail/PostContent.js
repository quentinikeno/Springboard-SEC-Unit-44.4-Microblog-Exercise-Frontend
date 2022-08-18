import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostFromAPI } from "../../store/postsSlice";
import CommentsSection from "../comments/CommentsSection";

const PostContent = ({ postId, post, toggleIsEditing }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { title, description, body, comments, votes } = post;

	const handleDelete = () => {
		dispatch(deletePostFromAPI(postId));
		navigate("/");
	};

	return (
		<section className="section">
			<div className="is-flex is-justify-content-space-between is-align-items-center">
				<div>
					<h2 className="title is-2">{title}</h2>
					<p className="subtitle is-4 my-3">{description}</p>
				</div>
				<div>
					<button
						className="button is-info m-3"
						onClick={toggleIsEditing}
					>
						Edit <i className="fa-solid fa-pen-to-square ml-3"></i>
					</button>
					<button
						className="button is-danger m-3"
						onClick={handleDelete}
					>
						Delete <i className="fa-solid fa-trash ml-3"></i>
					</button>
					<div className="is-flex is-justify-content-center is-align-items-center my-3">
						<button class="button is-ghost">
							<i className="fa-solid fa-chevron-up fa-xl"></i>
						</button>
						<span className="mx-3 is-size-4">{votes}</span>
						<button class="button is-ghost">
							<i className="fa-solid fa-chevron-down fa-xl"></i>
						</button>
					</div>
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

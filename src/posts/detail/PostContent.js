import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../store/postsSlice";
import CommentsSection from "../comments/CommentsSection";

const PostContent = ({
	postId,
	comments,
	addComment,
	deleteComment,
	toggleIsEditing,
}) => {
	const post = useSelector((state) => state.posts[postId]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { title, description, body } = post;

	const handleDelete = () => {
		dispatch(deletePost(postId));
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
			<CommentsSection
				comments={comments}
				addComment={addComment}
				deleteComment={deleteComment}
				postId={postId}
			/>
		</section>
	);
};

export default PostContent;

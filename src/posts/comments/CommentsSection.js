import { useSelector } from "react-redux";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const CommentsSection = ({ postId }) => {
	const comments = useSelector((state) => state.comments[postId]);
	const commentComponents = Object.keys(comments).map((commentId) => (
		<Comment
			key={commentId}
			commentId={commentId}
			postId={postId}
			text={comments[commentId]}
		/>
	));
	return (
		<div>
			<h4 className="title is-4">Comments</h4>
			{commentComponents.length > 0 ? (
				<div>{commentComponents}</div>
			) : (
				<p>No comments yet...</p>
			)}
			<div>
				<NewCommentForm postId={postId} />
			</div>
		</div>
	);
};

export default CommentsSection;

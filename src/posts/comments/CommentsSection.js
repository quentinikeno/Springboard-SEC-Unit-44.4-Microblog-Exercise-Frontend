import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const CommentsSection = ({ postId, comments }) => {
	const commentComponents = comments.map((comment) => (
		<Comment
			key={comment.id}
			commentId={comment.id}
			postId={postId}
			text={comment.text}
		/>
	));
	return (
		<div>
			<h4 className="title is-4">
				Comments <i className="fa-solid fa-comment ml-3"></i>
			</h4>
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

import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const CommentsSection = ({ comments, addComment, deleteComment, postId }) => {
	const commentComponents = Object.keys(comments).map((commentId) => (
		<Comment
			key={commentId}
			commentId={commentId}
			postId={postId}
			text={comments[commentId]}
			deleteComment={deleteComment}
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
				<NewCommentForm
					addComment={addComment}
					postId={postId}
					deleteComment={deleteComment}
				/>
			</div>
		</div>
	);
};

export default CommentsSection;

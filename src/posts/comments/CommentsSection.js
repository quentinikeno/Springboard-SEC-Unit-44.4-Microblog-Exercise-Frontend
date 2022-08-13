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
			<div>{commentComponents}</div>
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

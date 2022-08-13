const Comment = ({ text, deleteComment, commentId, postId }) => {
	const handleDelete = () => {
		deleteComment(postId, commentId);
	};
	return (
		<div className="media">
			<div className="media-content">
				<div className="content">
					<p>{text}</p>
				</div>
			</div>
			<div class="media-right">
				<button class="delete" onClick={handleDelete}></button>
			</div>
		</div>
	);
};

export default Comment;

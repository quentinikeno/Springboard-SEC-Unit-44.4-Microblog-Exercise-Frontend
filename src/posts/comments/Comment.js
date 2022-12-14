import { useDispatch } from "react-redux";
import { deleteCommentFromAPI } from "../../store/postsSlice";

const Comment = ({ text, commentId, postId }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteCommentFromAPI({ postId, commentId }));
	};
	return (
		<div className="media">
			<div className="media-content">
				<div className="content">
					<p>{text}</p>
				</div>
			</div>
			<div className="media-right">
				<button className="delete" onClick={handleDelete}></button>
			</div>
		</div>
	);
};

export default Comment;

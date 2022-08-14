import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PostDetail from "./PostDetail";

const FindPost = ({ postComments, addComment, deleteComment }) => {
	const { postId } = useParams();
	const posts = useSelector((state) => state.posts);
	const foundPost = Object.keys(posts).find((id) => id === postId);
	const foundComments = postComments[postId];

	return foundPost ? (
		<PostDetail
			comments={foundComments}
			addComment={addComment}
			deleteComment={deleteComment}
		/>
	) : (
		<Navigate to="/" />
	);
};

export default FindPost;

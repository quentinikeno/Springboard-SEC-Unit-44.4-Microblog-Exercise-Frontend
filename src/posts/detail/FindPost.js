import { useParams, Navigate } from "react-router-dom";
import PostDetail from "./PostDetail";

const FindPost = ({ postComments, addComment, deleteComment }) => {
	const { postId } = useParams();
	const foundPost = posts.find((post) => post.id === postId);
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

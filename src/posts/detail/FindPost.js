import { useParams, Navigate } from "react-router-dom";
import PostDetail from "./PostDetail";

const FindPost = ({ posts }) => {
	const { postId } = useParams();
	const foundPost = posts.find((post) => post.id === postId);

	return foundPost ? <PostDetail post={foundPost} /> : <Navigate to="/" />;
};

export default FindPost;

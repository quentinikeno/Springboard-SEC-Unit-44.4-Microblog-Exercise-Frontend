import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PostDetail from "./PostDetail";

const FindPost = () => {
	const { postId } = useParams();
	const posts = useSelector((state) => state.posts);
	const foundPost = Object.keys(posts).find((id) => id === postId);

	return foundPost ? <PostDetail postId={postId} /> : <Navigate to="/" />;
};

export default FindPost;

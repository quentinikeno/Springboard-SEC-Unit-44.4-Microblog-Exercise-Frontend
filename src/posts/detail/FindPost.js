import { useParams, Navigate } from "react-router-dom";
import PostDetail from "./PostDetail";

const FindPost = ({ posts }) => {
	const { id } = useParams();
	const foundPost = posts.find((post) => post.id === id);

	return foundPost ? <PostDetail post={foundPost} /> : <Navigate to="/" />;
};

export default FindPost;

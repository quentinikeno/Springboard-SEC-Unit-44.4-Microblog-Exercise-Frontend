import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PostDetail from "./PostDetail";

const FindPost = () => {
	const { postId } = useParams();
	const foundPost =
		useSelector((state) => state.titles.titles[postId]) || null;

	return foundPost ? <PostDetail postId={postId} /> : <Navigate to="/" />;
};

export default FindPost;

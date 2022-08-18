import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {
	getPostFromAPI,
	deletePostFromAPI,
	unsetError,
} from "../../store/postsSlice";
import useUpdateVote from "../../hooks/useUpdateVote";
import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = () => {
	const { postId } = useParams();
	const [isEditing, toggleIsEditing] = useToggleState(false);
	const post = useSelector((state) => state.posts.posts[postId]);
	const { isLoading, error } = useSelector((state) => state.posts);
	const handleVote = useUpdateVote(postId, true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const getPost = async () => {
			await dispatch(getPostFromAPI(postId));
		};
		dispatch(unsetError());
		if (!post) getPost();
	}, [dispatch, postId, post, error]);

	const deletePost = async () => {
		await dispatch(deletePostFromAPI(postId));
		navigate("/");
	};

	if ((!post || isLoading) && !error) return <p>Loading...</p>;

	if (error) return <Navigate to="/" />;

	if (isEditing)
		return (
			<EditPostForm postId={postId} toggleIsEditing={toggleIsEditing} />
		);

	return (
		<PostContent
			postId={postId}
			post={post}
			toggleIsEditing={toggleIsEditing}
			deletePost={deletePost}
			handleVote={handleVote}
		/>
	);
};

export default PostDetail;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getPostFromAPI, unsetError } from "../../store/postsSlice";
import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = () => {
	const { postId } = useParams();
	const [isEditing, toggleIsEditing] = useToggleState(false);
	const post = useSelector((state) => state.posts.posts[postId]);
	const { isLoading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		const getPost = async () => {
			await dispatch(getPostFromAPI(postId));
		};
		dispatch(unsetError());
		if (!post) getPost();
	}, [dispatch, postId, post, error]);

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
		/>
	);
};

export default PostDetail;

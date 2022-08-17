import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostFromAPI } from "../../store/postsSlice";
import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = () => {
	const { postId } = useParams();
	const [isEditing, toggleIsEditing] = useToggleState(false);
	const post = useSelector((state) => state.posts.posts[postId]);
	const isLoading = useSelector((state) => state.posts.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		const getPost = async () => {
			dispatch(getPostFromAPI(postId));
		};
		if (!post) getPost();
	}, [dispatch, postId, post]);

	if (!post || isLoading) return <p>Loading...</p>;

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

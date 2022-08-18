import { useDispatch } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { deletePostFromAPI } from "../../store/postsSlice";
import useGetPost from "../../hooks/useGetPost";
import useUpdateVote from "../../hooks/useUpdateVote";
import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = () => {
	const { postId } = useParams();
	const [post, isLoading, error] = useGetPost(postId);
	const [isEditing, toggleIsEditing] = useToggleState(false);
	const handleVote = useUpdateVote(postId, true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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

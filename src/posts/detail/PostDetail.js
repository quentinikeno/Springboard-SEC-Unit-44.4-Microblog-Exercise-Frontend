import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = ({ postId, comments, addComment, deleteComment }) => {
	const [isEditing, toggleIsEditing] = useToggleState(false);

	if (isEditing) return <EditPostForm toggleIsEditing={toggleIsEditing} />;

	return (
		<PostContent
			postId={postId}
			comments={comments}
			addComment={addComment}
			deleteComment={deleteComment}
			toggleIsEditing={toggleIsEditing}
		/>
	);
};

export default PostDetail;

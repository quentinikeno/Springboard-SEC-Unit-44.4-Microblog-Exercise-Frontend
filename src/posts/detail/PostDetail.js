import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = ({ comments, addComment, deleteComment }) => {
	const [isEditing, toggleIsEditing] = useToggleState(false);

	if (isEditing) return <EditPostForm toggleIsEditing={toggleIsEditing} />;

	return (
		<PostContent
			comments={comments}
			addComment={addComment}
			deleteComment={deleteComment}
			deletePost={deletePost}
			toggleIsEditing={toggleIsEditing}
		/>
	);
};

export default PostDetail;

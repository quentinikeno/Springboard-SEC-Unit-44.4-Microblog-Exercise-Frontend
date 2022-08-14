import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = ({ id, comments, addComment, deleteComment }) => {
	const [isEditing, toggleIsEditing] = useToggleState(false);

	if (isEditing) return <EditPostForm toggleIsEditing={toggleIsEditing} />;

	return (
		<PostContent
			id={id}
			comments={comments}
			addComment={addComment}
			deleteComment={deleteComment}
			toggleIsEditing={toggleIsEditing}
		/>
	);
};

export default PostDetail;

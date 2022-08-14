import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = ({ postId }) => {
	const [isEditing, toggleIsEditing] = useToggleState(false);

	if (isEditing)
		return (
			<EditPostForm postId={postId} toggleIsEditing={toggleIsEditing} />
		);

	return <PostContent postId={postId} toggleIsEditing={toggleIsEditing} />;
};

export default PostDetail;

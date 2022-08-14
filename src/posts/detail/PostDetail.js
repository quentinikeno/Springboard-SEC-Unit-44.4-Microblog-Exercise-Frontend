import useToggleState from "../../hooks/useToggleState";
import PostContent from "./PostContent";
import EditPostForm from "../EditPostForm";

const PostDetail = ({
	post,
	editPost,
	deletePost,
	comments,
	addComment,
	deleteComment,
}) => {
	const [isEditing, toggleIsEditing] = useToggleState(false);

	if (isEditing)
		return (
			<EditPostForm
				post={post}
				editPost={editPost}
				toggleIsEditing={toggleIsEditing}
			/>
		);

	return (
		<PostContent
			post={post}
			comments={comments}
			addComment={addComment}
			deleteComment={deleteComment}
			deletePost={deletePost}
			toggleIsEditing={toggleIsEditing}
		/>
	);
};

export default PostDetail;

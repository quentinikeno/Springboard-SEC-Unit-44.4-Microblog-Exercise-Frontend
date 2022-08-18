import { useDispatch } from "react-redux";
import { updateVoteToAPITitle } from "../store/titlesSlice";
import { updateVoteToAPIPost } from "../store/postsSlice";

const useUpdateVote = (postId, isPost) => {
	// isPost: boolean checking if this is a post.  If it is a post, we need to dispatch an action to the post slice.
	// If not dispatch an action to the titles slice.
	const dispatch = useDispatch();

	const handleVote = (direction) => {
		isPost
			? dispatch(updateVoteToAPIPost({ postId, direction }))
			: dispatch(updateVoteToAPITitle({ postId, direction }));
	};
	return handleVote;
};

export default useUpdateVote;

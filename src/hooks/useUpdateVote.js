import { useDispatch } from "react-redux";
import { updateVoteToAPITitle } from "../store/titlesSlice";
import { updateVoteToAPIPost, incDecVotes } from "../store/postsSlice";

const useUpdateVote = (postId, isPost) => {
	// isPost: boolean checking if this is a post.  If it is a post, we need to dispatch an action to the post slice.
	// If not dispatch an action to the titles slice.
	const dispatch = useDispatch();

	const handleVote = async (direction) => {
		if (isPost) {
			await dispatch(updateVoteToAPIPost({ postId, direction }));
		} else {
			await dispatch(updateVoteToAPITitle({ postId, direction }));
			dispatch(incDecVotes({ postId, direction }));
		}
	};
	return handleVote;
};

export default useUpdateVote;

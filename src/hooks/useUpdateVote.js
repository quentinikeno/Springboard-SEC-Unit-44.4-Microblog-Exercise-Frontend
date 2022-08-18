import { useDispatch } from "react-redux";
import { updateVoteToAPI } from "../store/titlesSlice";

const useUpdateVote = (postId) => {
	const dispatch = useDispatch();

	const handleVote = (direction) => {
		dispatch(updateVoteToAPI({ postId, direction }));
	};
	return handleVote;
};

export default useUpdateVote;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostFromAPI, unsetError } from "../store/postsSlice";

const useGetPost = (postId) => {
	const post = useSelector((state) => state.posts.posts[postId]);
	const { isLoading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		const getPost = async () => {
			await dispatch(getPostFromAPI(postId));
		};
		dispatch(unsetError());
		if (!post) getPost();
	}, [dispatch, postId, post]);
	return [post, isLoading, error];
};

export default useGetPost;

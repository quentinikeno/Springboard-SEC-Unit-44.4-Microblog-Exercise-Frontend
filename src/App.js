import { useState } from "react";
import Header from "./Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
	const [posts, setPosts] = useState([]);
	const [postComments, setPostComments] = useState({});
	// {postId: {commentId: text, ...}}

	const addPost = (newPost) => {
		setPosts((posts) => [...posts, newPost]);
	};
	const editPost = (editedPost) => {
		setPosts((posts) =>
			posts.map((post) => (post.id === editedPost.id ? editedPost : post))
		);
	};
	const deletePost = (id) => {
		setPosts((posts) => [...posts].filter((post) => post.id !== id));
	};

	const initComment = (postId) => {
		setPostComments((postComments) => ({ ...postComments, [postId]: {} }));
	};
	const addComment = (postId, commentId, text) => {
		setPostComments((postComments) => {
			const comments = { ...postComments[postId] };
			const newPostComments = {
				...postComments,
				[postId]: { ...comments, [commentId]: text },
			};
			return newPostComments;
		});
	};
	const deleteComment = (postId, commentId) => {
		setPostComments((postComments) => {
			const comments = { ...postComments[postId] };
			delete comments[commentId];
			const newPostComments = {
				...postComments,
				[postId]: comments,
			};
			return newPostComments;
		});
	};
	return (
		<div className="App container">
			<Header />
			<AppRoutes
				posts={posts}
				addPost={addPost}
				editPost={editPost}
				deletePost={deletePost}
				postComments={postComments}
				initComment={initComment}
				addComment={addComment}
				deleteComment={deleteComment}
			/>
		</div>
	);
}

export default App;

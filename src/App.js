import Header from "./Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
	const [postComments, setPostComments] = useState({});

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
				postComments={postComments}
				initComment={initComment}
				addComment={addComment}
				deleteComment={deleteComment}
			/>
		</div>
	);
}

export default App;

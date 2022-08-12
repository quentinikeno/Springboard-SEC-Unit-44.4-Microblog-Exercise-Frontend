import { useState } from "react";
import Header from "./Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
	const [posts, setPosts] = useState([]);
	const addPost = (newPost) => {
		setPosts((posts) => [...posts, newPost]);
	};
	const editPost = (editedPost) => {
		setPosts((posts) =>
			posts.map((post) => (post.id === editedPost.id ? editedPost : post))
		);
	};
	return (
		<div className="App container">
			<Header />
			<AppRoutes posts={posts} addPost={addPost} editPost={editPost} />
		</div>
	);
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import NewPostForm from "./posts/NewPostForm";
import FindPost from "./posts/detail/FindPost";

function App() {
	const [posts, setPosts] = useState([]);
	const addPost = (newPost) => {
		setPosts([...posts, newPost]);
	};
	return (
		<div className="App container">
			<Header />
			<Routes>
				<Route path="/" element={<Homepage posts={posts} />} />
				<Route
					path="/new"
					element={<NewPostForm addPost={addPost} />}
				/>
				<Route path="/:postId" element={<FindPost posts={posts} />} />
			</Routes>
		</div>
	);
}

export default App;

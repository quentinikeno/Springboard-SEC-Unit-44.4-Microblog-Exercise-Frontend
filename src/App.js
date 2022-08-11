import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import NewPostForm from "./posts/NewPostForm";

function App() {
	const [posts, setPosts] = useState([]);
	const addPost = (newPost) => {
		setPosts([...posts, newPost]);
	};
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/new"
					element={<NewPostForm addPost={addPost} />}
				/>
			</Routes>
		</div>
	);
}

export default App;

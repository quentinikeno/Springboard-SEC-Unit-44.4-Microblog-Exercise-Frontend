import { useState } from "react";
import Header from "./Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
	const [posts, setPosts] = useState([]);
	const addPost = (newPost) => {
		setPosts([...posts, newPost]);
	};
	return (
		<div className="App container">
			<Header />
			<AppRoutes posts={posts} addPost={addPost} />
		</div>
	);
}

export default App;

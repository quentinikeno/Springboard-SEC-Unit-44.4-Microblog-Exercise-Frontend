import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "Header";

function App() {
	const [posts, setPosts] = useState([]);
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/new" element={<NewPostForm />} />
			</Routes>
		</div>
	);
}

export default App;

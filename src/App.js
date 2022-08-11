import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	const [posts, setPosts] = useState([]);
	return (
		<div className="App">
			<Routes>
				<Route path="/new" element={<NewPostForm />} />
			</Routes>
		</div>
	);
}

export default App;

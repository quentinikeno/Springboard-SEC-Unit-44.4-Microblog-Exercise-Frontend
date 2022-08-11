import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import NewPostForm from "../posts/NewPostForm";
import FindPost from "../posts/detail/FindPost";

const AppRoutes = ({ posts, addPost }) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage posts={posts} />} />
			<Route path="/new" element={<NewPostForm addPost={addPost} />} />
			<Route path="/:postId" element={<FindPost posts={posts} />} />
		</Routes>
	);
};

export default AppRoutes;

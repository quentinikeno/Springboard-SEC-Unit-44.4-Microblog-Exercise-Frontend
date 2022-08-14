import { Routes, Route } from "react-router-dom";
import Homepage from "../home/Homepage";
import NewPostForm from "../posts/NewPostForm";
import FindPost from "../posts/detail/FindPost";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/new" element={<NewPostForm />} />
			<Route path="/:postId" element={<FindPost />} />
		</Routes>
	);
};

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Homepage from "../home/Homepage";
import NewPostForm from "../posts/NewPostForm";
import FindPost from "../posts/detail/FindPost";

const AppRoutes = ({
	postComments,
	initComment,
	addComment,
	deleteComment,
}) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route
				path="/new"
				element={<NewPostForm initComment={initComment} />}
			/>
			<Route
				path="/:postId"
				element={
					<FindPost
						addComment={addComment}
						deleteComment={deleteComment}
						postComments={postComments}
					/>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;

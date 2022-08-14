import { useSelector } from "react-redux";
import Title from "./Title";

const TitleList = () => {
	const posts = useSelector((state) => state.posts);
	const postIds = Object.key(posts);

	if (postIds.length === 0) return <p>No posts to display yet!</p>;

	const titles = postIds.map((id) => (
		<Title
			key={id}
			id={id}
			title={posts[id].title}
			description={posts[id].description}
		/>
	));
	return <div className="columns is-multiline is-desktop">{titles}</div>;
};

export default TitleList;

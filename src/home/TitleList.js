import useGetTitles from "../hooks/useGetTitles";
import Title from "./Title";

const TitleList = () => {
	const [titles, isLoading, postIds] = useGetTitles();

	if (isLoading) return <p>Loading...</p>;

	if (postIds.length === 0) return <p>No posts to display yet!</p>;

	const titleComponents = postIds.map((id) => (
		<Title
			key={id}
			postId={id}
			title={titles[id].title}
			description={titles[id].description}
			votes={titles[id].votes}
		/>
	));
	return (
		<div className="columns is-multiline is-desktop">{titleComponents}</div>
	);
};

export default TitleList;

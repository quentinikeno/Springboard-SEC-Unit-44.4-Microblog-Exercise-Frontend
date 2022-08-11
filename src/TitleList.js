import Title from "./Title";

const TitleList = ({ posts }) => {
	if (posts.length === 0) return <p>No posts to display yet!</p>;

	const titles = posts.map((post) => <Title key={post.id} post={post} />);
	return <div className="columns is-multi-line is-desktop">{titles}</div>;
};

export default TitleList;

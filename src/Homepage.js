import TitleList from "./TitleList";

const Homepage = ({ posts }) => {
	return (
		<div>
			<p className="my-5">
				Welcome to <strong>Microblog</strong>, our innovative site for
				communicating on the information superhighway.
			</p>
			<TitleList posts={posts} />
		</div>
	);
};

export default Homepage;

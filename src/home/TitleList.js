import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTitles } from "../store/titlesSlice";
import Title from "./Title";

const TitleList = () => {
	const dispatch = useDispatch();
	const { titles, isLoading } = useSelector((state) => state.titles);
	const postIds = Object.keys(titles);

	useEffect(() => {
		dispatch(getTitles());
	}, [dispatch]);

	if (isLoading) return <p>Loading...</p>;

	if (postIds.length === 0) return <p>No posts to display yet!</p>;

	const titleComponents = postIds.map((id) => (
		<Title
			key={id}
			id={id}
			title={titles[id].title}
			description={titles[id].description}
		/>
	));
	return (
		<div className="columns is-multiline is-desktop">{titleComponents}</div>
	);
};

export default TitleList;

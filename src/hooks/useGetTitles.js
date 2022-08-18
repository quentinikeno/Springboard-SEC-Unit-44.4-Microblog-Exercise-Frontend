import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTitles } from "../store/titlesSlice";

const useGetTitles = () => {
	const dispatch = useDispatch();
	const { titles, isLoading } = useSelector((state) => state.titles);
	const postIds = Object.keys(titles);

	useEffect(() => {
		const getTitlesFromAPI = async () => {
			await dispatch(getTitles());
		};
		getTitlesFromAPI();
	}, [dispatch]);
	return [titles, isLoading, postIds];
};

export default useGetTitles;

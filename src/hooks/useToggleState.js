import { useState } from "react";

const useToggleState = () => {
	const [isToggled, setToggled] = useState(false);
	const toggle = () => {
		setToggled((isToggled) => !isToggled);
	};
	return [isToggled, toggle];
};

export default useToggleState;

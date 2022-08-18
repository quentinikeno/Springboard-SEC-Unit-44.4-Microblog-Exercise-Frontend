import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

it("renders without crashing", () => {
	render(
		<Provider store={store}>
			<MemoryRouter>
				<App />
			</MemoryRouter>
		</Provider>
	);
});

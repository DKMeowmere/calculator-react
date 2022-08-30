import React from "react"
import { CalculatorContainer } from "./features/CalculatorContainer"
import { Provider } from "react-redux"
import store from "./app/store"
// https://github.com/gopinav/Redux-Toolkit-Tutorials/blob/master/react-rtk-ts-demo/src/features/user/UserView.tsx
function App() {
	return (
		<>
			<Provider store={store}>
				<CalculatorContainer />
			</Provider>
		</>
	)
}

export default App

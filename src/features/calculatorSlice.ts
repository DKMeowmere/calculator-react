import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// console.log("prev")
// console.log(state.prev)
// console.log("current")
// console.log(state.current)
// console.log("###################")
type initialState = {
	prev: number | null
	current: number | null
	operation: string
	lastOperationSymbol: string
	squareNextNum: boolean
	calculatorValues: any
}

const initialState: initialState = {
	prev: null,
	current: null,
	operation: "",
	lastOperationSymbol: "",
	squareNextNum: false,
	calculatorValues: [
		{
			value: "7",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "8",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "9",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "*",
			action: "OPERATION",
			color: "#9ea2a6",
		},

		{
			value: "4",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "5",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "6",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "/",
			action: "OPERATION",
			color: "#9ea2a6",
		},
		{
			value: "1",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "2",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "3",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "+",
			action: "OPERATION",
			color: "#9ea2a6",
		},

		{
			value: ".",
			action: "INSERT_DOT",
			color: "#525661",
		},
		{
			value: "0",
			action: "INSERT_NUM",
			color: "#525661",
		},
		{
			value: "=",
			action: "COMPUTE",
			color: "#525661",
		},
		{
			value: "-",
			action: "OPERATION",
			color: "#9ea2a6",
		},

		{
			value: "%",
			action: "OPERATION",
			color: "#8fb3b5",
		},
		{
			value: "√",
			action: "SQUARE",
			color: "#8fb3b5",
		},
		{
			value: "π",
			action: "INSERT_PI",
			color: "#8fb3b5",
		},
		{
			value: "c",
			action: "CLEAR",
			color: "#aa0000",
		},
	],
}

const computeOperation = (state: initialState, operationType: string): void => {
	if (state.prev === null || state.current === null) return
	switch (operationType) {
		case "+": {
			state.prev += state.current
			break
		}
		case "-": {
			state.prev -= state.current
			break
		}
		case "*": {
			state.prev *= state.current
			break
		}
		case "/": {
			state.prev /= state.current
			break
		}
		case "%": {
			state.prev %= state.current
			break
		}
		default:
			break
	}
}

const calculatorSlice = createSlice({
	name: "calculator",
	initialState,
	reducers: {
		compute: (
			state,
			action: PayloadAction<{ type: string; value: number | string }>
		) => {
			switch (action.payload.type) {
				case "INSERT_NUM": {
					state.operation += action.payload.value
					if (state.current === null)
						state.current = +action.payload.value
					else {
						if (state.operation.includes(".")) {
							const valueToInsert = +("0" + action.payload.value)
							state.current += +valueToInsert
						} else {
							state.current += <number>action.payload.value
							state.current = +state.current
						}
					}
					break
				}
				case "INSERT_DOT": {
					if (state.current === null) break
					if (state.current.toString().includes(".")) break
					state.current += <number>action.payload.value
					state.operation += action.payload.value
					break
				}
				case "INSERT_PI": {
					if (state.current !== null) break
					const PI: number = 3.14159265359
					state.current = PI
					state.operation += action.payload.value
					break
				}
				case "SQUARE": {
					if (state.current !== null) break
					state.squareNextNum = true
					state.operation += action.payload.value
					break
				}
				case "OPERATION": {
					if (state.current === null) break
					if (state.squareNextNum) {
						state.current = Math.sqrt(state.current)
						state.squareNextNum = false
					}
					if (state.prev === null) {
						state.prev = +state.current
					} else {
						computeOperation(state, state.lastOperationSymbol)
					}
					state.lastOperationSymbol = <string>action.payload.value
					state.current = null
					state.operation += action.payload.value
					break
				}
				case "COMPUTE": {
					if (state.prev === null) {
						//if operation is square only current value    √x
						if (state.squareNextNum && state.current !== null) {
							state.current = Math.sqrt(state.current)
							state.operation = state.current.toString()
							state.squareNextNum = false
						}
						break
					}
					if (state.current === null) break
					//if current is not number convert it
					if (state.current !== +state.current) {
						state.current = +state.current
					}
					if (state.squareNextNum) {
						state.current = Math.sqrt(state.current)
						state.squareNextNum = false
					}
					computeOperation(state, state.lastOperationSymbol)
					state.lastOperationSymbol = ""
					state.current = state.prev
					state.prev = null
					state.operation = "" + state.current
					break
				}
				case "CLEAR": {
					state.prev = null
					state.current = null
					state.operation = ""
					state.lastOperationSymbol = ""
					break
				}
				default:
					break
			}
		},
	},
})
export default calculatorSlice.reducer
export const { compute } = calculatorSlice.actions

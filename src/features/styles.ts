import React from "react"

const styles: { [key: string]: React.CSSProperties } = {
	resultDiplayContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "start",
		backgroundColor: "#000",
		padding: "10px",
		width: "90%",
		height: "50px",
		borderRadius: "10px",
		overflowY: "auto",
	},
	result: {
		overflow:"auto",
		padding: "0 20px",
		color: "#fff",
		fontSize: "2rem",
	},
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100vw",
		height: "100vh",
		backgroundColor: "#343434",
	},
	calculatorContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#707070",
		width: "650px",
		maxWidth:"85%",
		padding: "20px",
		borderRadius: "20px",
	},
	calculatorButton:{
		padding: "10px 0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all .4s ease-in-out",
		cursor: "pointer",
		border: `5px solid`,
		borderRadius: "10px",
	},
	buttonValue:{
		fontSize: "2.4rem",
		color: "#fff",
		fontWeight: "700",
		userSelect: "none",
	}
}
export default styles

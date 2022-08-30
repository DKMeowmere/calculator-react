import { Box } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import { ButtonsContainer } from "./components/ButtonsContainer"
import { ResultDisplay } from "./components/ResultDisplay"
import styles from "./styles"

export const CalculatorContainer: React.FunctionComponent = () => {
	return (
		<Box sx={styles.container}>
			<Stack spacing={2} sx={styles.calculatorContainer}>
				<ResultDisplay />
				<ButtonsContainer />
			</Stack>
		</Box>
	)
}

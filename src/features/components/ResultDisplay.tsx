import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import styles from "../styles"
import { useAppSelector } from "../../app/hooks"

export const ResultDisplay: React.FunctionComponent = () => {
	const operation = useAppSelector(state => state.calculator.operation)
	return (
		<Box sx={styles.resultDiplayContainer}>
			<Typography variant="body1" sx={styles.result}>
				{operation}
			</Typography>
		</Box>
	)
}

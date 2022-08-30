import { Box, Typography } from "@mui/material"
import React from "react"
import { useAppDispatch } from "../../app/hooks"
import styles from "../styles"
import { compute } from "../calculatorSlice"

type props = {
	value: string
	typeOfAction: string
	color: string
}
export const CalculatorButton = ({ value, typeOfAction, color }: props) => {
	const dispatch = useAppDispatch()
	return (
		<Box
			sx={{
				...styles.calculatorButton,
				backgroundColor: color,
				borderColor: color,
				"&:hover": {
					border: "5px solid #000000",
					filter: "brightness(120%)",
				},
			}}
			onClick={() => dispatch(compute({ type: typeOfAction, value }))}
		>
			<Typography sx={styles.buttonValue}>{value}</Typography>
		</Box>
	)
}

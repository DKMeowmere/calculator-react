import { Grid } from "@mui/material"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CalculatorButton } from "./CalculatorButton"
import { v4 as uuidv4 } from "uuid"

export const ButtonsContainer: React.FunctionComponent = () => {
	const buttonsData = useAppSelector(
		state => state.calculator.calculatorValues
	)
	return (
		<Grid width="95%" container>
			{buttonsData.map((item: any) => (
				<Grid
					key={uuidv4()}
					item
					xs={3}
					p="8px"
					sx={{ boxSizing: "border-box" }}
				>
					<CalculatorButton
						value={item.value}
						typeOfAction={item.action}
						color={item.color}
					/>
				</Grid>
			))}
		</Grid>
	)
}

import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@material-ui/core';
import { useStyles } from './style.js';

const Screen_1 = () => {
	const [inputValue, setInputValue] = useState({firstNumber:null,secondNumber:null});
	const classes = useStyles();

	const onInputChange = (event)=>{
		const {name,value} = event.target;
		setInputValue({...inputValue,
			[name]:value
		});
	}
	console.log(inputValue,"inputValue 123")
	return (
		<div className={classes.operationFormWrap}>
			<Container fixed>
				<form noValidate autoComplete="off" className={classes.operationForm}>
					<Typography variant="h1" color="primary" className={classes.operationFormHeading} >
						Expression Evaluator
					</Typography>
					<Grid container spacing={3}>
						<Grid item md={4} xs={12}>
							<TextField className={classes.operationFormControl} name="firstNumber" type="number" variant="outlined"
								label="Enter First Number" onChange={(e)=> onInputChange(e)} value={inputValue.firstNumber}/>
						</Grid>
						<Grid item md={4} xs={12}>
						<TextField className={classes.operationFormControl} name="secondNumber" type="number" variant="outlined"
								label="Enter Second Number" onChange={(e)=> onInputChange(e)} value={inputValue.secondNumber}/>
						</Grid>
						<Grid item md={4} xs={12}>
							<Button className={classes.operationFormButton} variant="contained" color="primary">Add Number</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		</div>
	);
}
export default Screen_1;

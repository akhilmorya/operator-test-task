import React, { Fragment, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./style.js";

const Screen_1 = () => {
  const [inputValue, setInputValue] = useState({
    firstNumber: null,
    secondNumber: null,
  });
  const classes = useStyles();

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [isOperation, setIsOperator] = useState(false);

  const [operator, setOperator] = useState("+");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Inside thisss");
    if (inputValue) {
      setIsOperator(true);
    }
  };
  console.log(inputValue, "inputValue 123");
  const handleOperatorChange = (e) => {
    const { value } = e.target;
    setOperator(value);
  };
  return (
    <div className={classes.operationFormWrap}>
      <Container fixed>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          noValidate
          autoComplete="off"
          className={classes.operationForm}
        >
          <Typography
            variant="h1"
            color="primary"
            className={classes.operationFormHeading}
          >
            Expression Evaluator
          </Typography>
          {!isOperation ? (
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <TextField
                  className={classes.operationFormControl}
                  name="firstNumber"
                  type="number"
                  variant="outlined"
                  label="Enter First Number"
                  onChange={(e) => onInputChange(e)}
                  value={inputValue.firstNumber}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  className={classes.operationFormControl}
                  name="secondNumber"
                  type="number"
                  variant="outlined"
                  label="Enter Second Number"
                  onChange={(e) => onInputChange(e)}
                  value={inputValue.secondNumber}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <Button
                  type={"submit"}
                  className={classes.operationFormButton}
                  variant="contained"
                  color="primary"
                >
                  Add Number
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Fragment>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <span className={classes.operationBox}>
                    {inputValue.firstNumber}
                  </span>
                </Grid>
                <Grid item>
                  <span className={classes.operationBox}>
                    {inputValue.secondNumber}
                  </span>
                </Grid>
                <Grid item>
                  <span className={classes.operationBox}>+</span>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <span className={classes.operation}>=</span>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    color="primary"
                    className={classes.operationResult}
                  >
                    7
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <FormControl
                    variant="outlined"
                    className={classes.operationFormControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Operator
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={operator}
                      onChange={handleOperatorChange}
                      label="Operator"
                    >
                      <MenuItem value={"+"}>+</MenuItem>
                      <MenuItem value={"-"}>-</MenuItem>
                      <MenuItem value={"*"}>*</MenuItem>
                      <MenuItem value={"/"}>/</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.operationFormControl}
                    name="secondNumber"
                    type="number"
                    variant="outlined"
                    label="Enter Second Number"
                    onChange={(e) => onInputChange(e)}
                    value={inputValue.secondNumber}
                  />
                </Grid>
                <Grid item>
                  <Button
                    type={"submit"}
                    className={classes.operationFormButton}
                    variant="contained"
                    color="primary"
                  >
                    Add Operation
                  </Button>
                </Grid>
              </Grid>
            </Fragment>
          )}
        </form>
      </Container>
    </div>
  );
};
export default Screen_1;

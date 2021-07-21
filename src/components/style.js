import { fade, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  operationFormWrap:{
    padding: '50px 0',
  },
  operationForm:{
    width:'100%',
  },
  operationFormHeading:{
    fontWeight: 'normal',
    fontSize: '3rem',
    margin: '0 0 30px',
    '@media (max-width: 767px)' : {
      fontSize: '2rem',
      margin: '0 0 20px',
    }
  },
  operationFormControl:{
    width: '100%',
  },
  operationFormButton:{
    width: '100%',
    boxShadow: 'none',
    borderRadius: '0',
    padding: '14px 30px',
    textTransform: 'capitalize',
    fontSize: '1rem',
    borderRadius: '4px',
  },
  }))

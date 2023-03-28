import classes from "./ForgotPassword.module.css";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
} from "@mui/material";
import useInput from "../../Hooks/UseInput";

const ForgotPassword = (props) => {
  const ForgotPasswordHandler = () => {
    props.setForgotPassword(false);
  };
  //form validations
  const {
    value: emailInputValue,
    isValid: enteredEmailisValid,
    isError: emailIsError,
    inputKeyStrockHandler: emailKeyStrockHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredEmailisValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    //add your logic

    //
    resetEmailInput();
  };
  return (
    <div className={classes.innerDiv}>
      <h2>Did you forget your password?</h2>
      <p>
        Enter your Email Address you're using for your account below and we will
        send you a verification code to reset your password
      </p>
      <form onSubmit={formSubmitHandler}>
        <FormControl
          fullWidth
          error={emailIsError && true}
          variant="outlined"
          className={classes.formInput}
        >
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type="email"
            label="Email"
            value={emailInputValue}
            onChange={emailKeyStrockHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailIsError && (
            <FormHelperText id="component-error-text">
              Incorrect Email!
            </FormHelperText>
          )}
        </FormControl>
        <div className={classes.btnDIv}>
          <Button
            variant="contained"
            type="submit"
            className={classes.submitBtn}
          >
            Get verification Code
          </Button>
          <Button
            variant="contained"
            type="button"
            className={classes.backBtn}
            onClick={ForgotPasswordHandler}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ForgotPassword;
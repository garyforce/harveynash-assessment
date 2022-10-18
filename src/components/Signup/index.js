import React, { useState } from "react";
import { SignupForm, getFields, MainDiv } from "./Signup.component";
import { initialValue } from "./Signup.const";
import { useSelector, useDispatch } from "react-redux";
import { setSignupData } from "../redux/loginSlice";

export const validateFields = (signupData) => {
  let isFormValid = true;
  const phoneRegex = /^\d{10}$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const newError = {};
  for (let item in signupData) {
    if (item === "phone" && !signupData.phone.trim().match(phoneRegex)) {
      isFormValid = false;
      newError.phone = "This is not valid phone";
    }
    if (item === "email" && !signupData.email.trim().match(emailRegex)) {
      isFormValid = false;
      newError.email = "This is not valid email";
    }
  }
  return { newError, isFormValid };
};

const Signup = () => {
  const [errorData, setErrorData] = useState(initialValue);
  const signupData = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const onChangeField = (id) => {
    return (event) => {
      dispatch(setSignupData({ formName: id, data: event.target.value }));
      setErrorData({ ...errorData, [id]: "" });
    };
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const { newError, isFormValid } = validateFields(signupData);
    if (isFormValid) {
      alert("Your info was successfully submitted");
    } else {
      setErrorData(newError);
    }
  };

  return (
    <MainDiv>
      <h2>Signup</h2>
      <SignupForm onSubmit={onSubmit}>
        {getFields(signupData, onChangeField, errorData)}
        <button type={"submit"}>Submit</button>
      </SignupForm>
    </MainDiv>
  );
};

export default Signup;

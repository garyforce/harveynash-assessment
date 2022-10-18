import styled from "styled-components";
import FormField from "../common/FormField";
import { FormData } from "./Signup.const";

export const SignupForm = styled.form`
  border: 1px solid gray;
  padding: 40px 30px 50px;
  border-radius: 2px;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  input,
  textarea,
  select {
    flex: 1;
    border-radius: 3px;
    padding: 3px 10px;
    border: 1px solid gray;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    height: 100px;
    margin-bottom: 30px;
  }
`;

export const MainDiv = styled.div`
  max-width: 800px;
  margin: auto;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media all and (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const getFields = (signinData, onChangeField, errorData) => {
  return FormData.map((row, rowIndex) => {
    if (Array.isArray(row)) {
      return (
        <FlexDiv key={`row-${rowIndex}`}>
          {row.map((column, columnIndex) => (
            <FormField
              key={`column-${columnIndex}`}
              onChange={onChangeField(column.id)}
              value={signinData[column.id]}
              error={errorData[column.id]}
              {...column}
            />
          ))}
        </FlexDiv>
      );
    }
    return (
      <FormField
        key={`row-${rowIndex}`}
        onChange={onChangeField(row.id)}
        value={signinData[row.id]}
        error={errorData[row.id]}
        {...row}
      />
    );
  });
};

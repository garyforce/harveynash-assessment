import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";

import FormField from "./FormField";
import { addressTestMockData, cityTestMockData, emailNotValidTestMockData, emailTestMockData, firstNameTestMockData, jobTestMockData, lastNameTestMockData, phoneNotValidTestMockData, phoneTestMockData, reasonTestMockData, stateTestMockData, zipTestMockData } from "./testMockup";

describe("App", () => {
  test("renders First Name Field component", () => {
    render(<FormField {...firstNameTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('Gary');
  });  

  test("renders Last Name Field component", () => {
    render(<FormField {...lastNameTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('Foster');
  });  

  test("renders Email Field component", () => {
    render(<FormField {...emailTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('gary.work.pro@gmail.com');
  });  

  test("renders Email Not Valid Field component", () => {
    render(<FormField {...emailNotValidTestMockData} />);
    const element = screen.getByTestId('info-input');
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('abcde');
    const errorElement = screen.getByTestId('error-input')
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('This is not valid Email')
  });  

  test("renders Adress Field component", () => {
    render(<FormField {...addressTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('abcde');  
  });  

  test("renders City Field component", () => {
    render(<FormField {...cityTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('Neptune'); 
  });  

  test("renders State Field component", () => {
    render(<FormField {...stateTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('NJ');  
  });  

  test("renders ZIP Field component", () => {
    render(<FormField {...zipTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('12345');  
  });  

  test("renders Phone Field component", () => {
    render(<FormField {...phoneTestMockData} />);
    const element = screen.getByTestId('info-input')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('1234567890');  
  });  

  test("renders Phone Not Valid Field component", () => {
    render(<FormField {...phoneNotValidTestMockData} />);
    const element = screen.getByTestId('info-input');
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('12345');
    const errorElement = screen.getByTestId('error-input')
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('Phone Number is not valid')
  });  

  test("renders Job Title Field component", () => {
    render(<FormField {...jobTestMockData} />);
    const element = screen.getByTestId('job-level')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('Engineer - lead');  
  });  

  test("renders Textarea Field component", () => {
    render(<FormField {...reasonTestMockData} />);
    const element = screen.getByTestId('job-reason')
    expect(element).toBeInTheDocument();
    expect(element.value).toEqual('Contract was finished');  
  });
})
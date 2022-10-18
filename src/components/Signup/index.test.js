import { validateFields } from "./index";

test("if the phone field and email field are not valid", () => {
  const mockData = {
    email: "abcd",
    phone: "1234",
  };
  const error = validateFields(mockData);
  expect(error).toEqual({
    newError: {
      email: "This is not valid email",
      phone: "This is not valid phone",
    },
    isFormValid: false,
  });
});

test("if the phone field is not valid", () => {
  const mockData = {
    email: "gary.work.pro@gmail.com",
    phone: "abcd",
  };
  const error = validateFields(mockData);
  expect(error).toEqual({
    newError: {
      phone: "This is not valid phone",
    },
    isFormValid: false,
  });
});

test("if the email field is not valid", () => {
  const mockData = {
    email: "abcd",
    phone: "1234567890",
  };
  const error = validateFields(mockData);
  expect(error).toEqual({
    newError: {
      email: "This is not valid email"
    },
    isFormValid: false,
  });
});

test("Should be validate if the phone and email field is valid", () => {
  const mockData = {
    email: "gary.work.pro@gmail.com",
    phone: "1234567890",
  };
  const error = validateFields(mockData);
  // expect(error.isFormValid).toBe(true)
  expect(error).toEqual({
    newError: {},
    isFormValid: true,
  });
});

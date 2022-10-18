export const firstNameTestMockData = {
  name: "First Name",
  type: "text",
  placeholder: "First name",
  value: "Gary",
  required: true,
};

export const lastNameTestMockData = {
  name: "Last name",
  type: "text",
  placeholder: "Last name",
  value: "Foster",
  required: true,
};

export const emailTestMockData = {
  name: "Email",
  type: "text",
  value: "gary.work.pro@gmail.com",
  required: true,
};

export const emailNotValidTestMockData = {
  name: "Email",
  type: "text",
  value: "abcde",
  error: "This is not valid Email",
  required: true,
};

export const addressTestMockData = {
  name: "Address 1",
  type: "text",
  placeholder: "Address 1",
  value: "abcde",
};

export const cityTestMockData = {
  name: "City",
  type: "text",
  value: "Neptune",
};

export const stateTestMockData = { name: "State", type: "text", value: "NJ" };

export const zipTestMockData = { name: "ZIP", type: "text", value: "12345" };

export const phoneTestMockData = {
  name: "Phone",
  type: "text",
  value: "1234567890",
  require: true,
};

export const phoneNotValidTestMockData = {
  name: "Phone",
  type: "text",
  value: "12345",
  error: "Phone Number is not valid",
  require: true,
};

export const jobTestMockData = {
  name: "Job Title",
  type: "select",
  value: "Engineer - lead",
  require: true,
  options: [
    "Engineer - lead",
    "Engineer - mid level",
    "Engineer - junior",
    "Engineer - front end focused",
    "Engineer - backend focused",
    "Engineer - full stack",
  ],
};

export const reasonTestMockData = {
  name: "Reason",
  type: "textarea",
  value: "Contract was finished",
  placeholder:
    "Describe why you are a good fit for the job you are applying for.",
};

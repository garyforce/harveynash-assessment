
export const FormData = [
  [
    {
      id: "firstName",
      placeholder: "First name",
      required: true,
      type: "text",
      name: "First Name",
    },
    {
      id: "lastName",
      placeholder: "Last name",
      required: true,
      type: "text",
      name: "Last name",
    },
  ],
  {
    id: "email",
    required: true,
    type: "text",
    name: "Email",
  },
  {
    id: "address1",
    placeholder: "Address 1",
    type: "text",
    name: "Address 1",
  },
  [
    {
      id: "city",
      type: "text",
      name: "City",
    },
    {
      id: "state",
      type: "text",
      name: "State",
    },
    {
      id: "zip",
      type: "text",
      name: "ZIP",
    },
  ],
  {
    id: "phone",
    required: true,
    type: "text",
    name: "Phone",
  },
  {
    id: "jobTitle",
    options: [
      "Engineer - lead",
      "Engineer - mid level",
      "Engineer - junior",
      "Engineer - front end focused",
      "Engineer - backend focused",
      "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
    name: "Job Title",
  },
  {
    id: "reason",
    placeholder:
      "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
    name: "Reason",
  },
];

export const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  phone : '',
  jobTitle : '',
  reason : ''
}
import { FormFieldWrapper } from "./FormField.components";

const FormField = (props) => {
  const { name, type, placeholder, options, error, onChange, value, required } =
    props;

  const getField = (type, placeholder, options, onChange) => {
    if (type === "textarea") {
      return (
        <textarea placeholder={placeholder} onChange={onChange} value={value} data-testid = {'job-reason'}/>
      );
    }

    if (type === "select") {
      return (
        <select placeholder={placeholder} onChange={onChange} value={value} data-testid = {'job-level'}>
          {options.map((option, index) => (
            <option key={`form-select-${index}`}>{option}</option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
        data-testid = {'info-input'}
      />
    );
  };

  return (
    <FormFieldWrapper>
      <label>{name}</label>
      {getField(type, placeholder, options, onChange)}
      {error && <p style={{ color: "red" }} data-testid = {'error-input'}>{error}</p>}
    </FormFieldWrapper>
  );
};

export default FormField;

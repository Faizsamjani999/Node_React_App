import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const Field = ({ label, type, name, value, onChange, required, options }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      {type === 'select' ? (
        <Input
          type="select"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </FormGroup>
  );
};

export default Field;

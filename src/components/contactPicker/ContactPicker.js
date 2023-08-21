import React from "react";

export const ContactPicker = ({ value, name, onChange, contacts }) => {
  return (
    <select name={name} onChange={onChange} value={value}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};

import React from "react";
import { FloatingLabel } from "flowbite-react";

interface FormalFormProps {
  label: string;
  id?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: any
  type?: any;
  required?: boolean;
}

function FormTextInput({ label, id, handleChange, disabled=false, value, type="text", required=false }: FormalFormProps) {
  return (
    <main>
      <div className="flex w-full items-center gap-9 rounded-lg ">
        <FloatingLabel
          label={label}
          variant="outlined"
          className="w-fit duration-700 ease-in-out"
          id={id}
          onChange={handleChange}
          disabled={disabled}
          value={value}
          required={required}
          type={type}
        />
      </div>
    </main>
  );
}

export default FormTextInput;

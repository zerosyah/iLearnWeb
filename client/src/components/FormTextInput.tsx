import React from "react";
import { FloatingLabel } from "flowbite-react";

interface FormalFormProps {
  label: string;
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormTextInput({ label, id, handleChange }: FormalFormProps) {
  return (
    <main>
      <div className="flex w-full items-center gap-9 rounded-lg ">
        <FloatingLabel
          label={label}
          variant="outlined"
          className="w-fit duration-700 ease-in-out"
          id={id}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}

export default FormTextInput;

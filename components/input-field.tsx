import type { NextPage } from "next";
import { UseFormRegister, type FieldError } from 'react-hook-form';


type InputFieldType = {
  register: UseFormRegister<{ name: string; email: string }>;
  schemaProp: "name" | "email";
  error?: FieldError;
  
  type: string
  title?: string;
  placeholder?: string;
};

const InputField: NextPage<InputFieldType> = ({
  register,
  schemaProp,
  error,
  
  type,
  title,
  placeholder,

}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-sm text-dark-gray font-inter">
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch relative leading-[22px]">{title}</div>
        <input
          className="font-inter text-base bg-dominant self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border"
          placeholder = {placeholder}
          type = {type}
          {...register(schemaProp)}
        />
        {error && (
          <div className="self-stretch relative text-xs font-inter leading-[20px] text-bad-red">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;

import type { NextPage } from "next";

type InputFieldType = {
  title?: string;
  errorMessage?: boolean;
  placeholder?: string;
};

const InputField: NextPage<InputFieldType> = ({
  title,
  errorMessage = false, //These are default values
  placeholder = "John Doe",
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-sm text-dark-gray font-inter">
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch relative leading-[22px]">{title}</div>
        <input
          className="font-inter text-base bg-dominant self-stretch rounded-default-border-raius flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-light-border"
          placeholder={placeholder}
          type="text"
        />
        {errorMessage && (
          <div className="self-stretch relative text-xs font-inter leading-[20px] text-bad-red">
            Please include your name
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;

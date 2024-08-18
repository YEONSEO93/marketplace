import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface IInputProps {
  name: string;
  errors?: string[];
  key?: string;
}

const _Input = (
  {
    name,
    errors = [],
    ...rest
  }: IInputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        ref={ref}
        name={name}
        className="w-full h-12 px-4 py-2 rounded-full bg-gray-100 border border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-transparent shadow-md transition-all duration-300 ease-out placeholder:text-gray-500 text-gray-800"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
};

export default forwardRef(_Input);

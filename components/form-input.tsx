
interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-3 transition
         ring-neutral-200 focus:ring-violet-400 border-none placeholder:text-neutral-400 px-4 py-2 placeholder:font-light"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-small">
          {error}
        </span>
        // let errors = ["Invalid email format"];
        // <span key{0} className="text-red-500">
        // Invalid email format -- userface
        // </span>
      ))}
    </div>
  );
}

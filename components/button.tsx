"use client";

import { useFormStatus } from "react-dom";

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-12 font-medium disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
};

export default Button;

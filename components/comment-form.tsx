"use client";

import { FormEvent, useRef } from "react";

interface ICommentFormProps {
  handleSubmit: (payload: string) => void;
}

const CommentForm = ({ handleSubmit }: ICommentFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = formData.get("payload") as string;
    if (payload === "") return;
    await handleSubmit(payload);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex gap-3">
      <input
        placeholder="Enter a comment..."
        name="payload"
        autoComplete="off"
        className="text-white placeholder:text-white bg-neutral-600 outline-none border-none rounded-md w-72"
        ref={inputRef}
      />
      <button className="py-2 px-3 bg-orange-500 rounded-md cursor-pointer">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;

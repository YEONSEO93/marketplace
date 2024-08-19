
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { startStream } from "./actions";

export default function AddStream() {
  const [state, action] = useFormState(startStream, null);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full bg-white p-6 shadow-md mb-8">
        <h1 className="text-indigo-600 text-4xl font-extrabold text-center tracking-tight">
          Start a New Stream
        </h1>
      </header>

      {/* Form Section */}
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
        action={action}
      >
        <Input
          name="title"
          required
          placeholder="Title of your stream"
          errors={state?.formErrors}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black"
        />
        <Button
          text="Start Streaming"
        />
      </form>
    </div>
  );
}


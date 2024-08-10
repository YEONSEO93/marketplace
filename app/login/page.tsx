"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";


export default function LogIn() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col items-center p-8 gap-10 *:font-medium">
        <h1 className="text-9xl">🥯 </h1>
        <h2 className="text-4xl">Bagel Marketplace</h2>
      </div>

      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
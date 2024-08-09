import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-28 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Welcome to Bagel Marketplace 👋</h1>
        <h2 className="text-l font-light text-gray-200">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-7">
        <FormInput type="text" placeholder="Username" required errors={["username is too short"]} />
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
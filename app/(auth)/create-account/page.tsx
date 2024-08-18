// "use client";

// import Button from "@/components/button";
// import Input from "@/components/input";
// import SocialLogin from "@/components/social-login";
// import { useFormState } from "react-dom";
// import { createAccount } from "./actions";
// import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

// const CreateAccount = () => {
//   const [state, dispatch] = useFormState(createAccount, null);
//   return (
//     <div className="flex flex-col gap-10 py-20 px-6 bg-gray-50 rounded-2xl shadow-2xl relative overflow-hidden">
//       {/* Curved Header Section */}
//       <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-full z-0"></div>
//       <div className="relative z-10 flex flex-col gap-2 font-medium text-center">
//         <h1 className="text-3xl text-black">Create an Account</h1>
//         <h2 className="text-xl text-gray-600">Join us by filling the form below</h2>
//       </div>
//       <form action={dispatch} className="relative z-10 flex flex-col gap-4">
//         <Input
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//           errors={state?.fieldErrors.email}
//         />
//         <Input
//           name="username"
//           type="text"
//           placeholder="Username"
//           required
//           errors={state?.fieldErrors.username}
//         />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           errors={state?.fieldErrors.password}
//           minLength={PASSWORD_MIN_LENGTH}
//         />
//         <Input
//           name="confirm_password"
//           type="password"
//           placeholder="Confirm Password"
//           required
//           errors={state?.fieldErrors.confirm_password}
//           minLength={PASSWORD_MIN_LENGTH}
//         />
//         <Button text="Create Account" />
//       </form>
//       <SocialLogin />
//     </div>
//   );
// };

// export default CreateAccount;



"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

const CreateAccount = () => {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-6 py-10 px-6 bg-gray-50 rounded-2xl shadow-2xl relative overflow-hidden w-full max-w-md">
        {/* Curved Header Section */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-full z-0"></div>
        <div className="relative z-10 flex flex-col gap-2 font-medium text-center">
          <h1 className="text-2xl text-black">Create an Account</h1>
          <h2 className="text-lg text-gray-600">Join us by filling the form below</h2>
        </div>
        <form action={dispatch} className="relative z-10 flex flex-col gap-3">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
          />
          <Input
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            required
            errors={state?.fieldErrors.confirm_password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Button text="Create Account" />
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default CreateAccount;

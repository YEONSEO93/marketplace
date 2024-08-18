// "use client";

// import Button from "@/components/button";
// import Input from "@/components/input";
// import SocialLogin from "@/components/social-login";
// import { useFormState } from "react-dom";
// import { login } from "./actions";
// import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

// const LogIn = () => {
//   const [state, dispatch] = useFormState(login, null);
//   return (
//     <div className="flex flex-col gap-10 py-8 px-6 bg-white rounded-lg shadow-md">
//       <div className="flex flex-col gap-2 font-medium text-center">
//         <h1 className="text-3xl text-gray-800">Welcome Back</h1>
//         <h2 className="text-xl text-gray-600">Log in with your credentials</h2>
//       </div>
//       <form action={dispatch} className="flex flex-col gap-4">
//         <Input
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//           errors={state?.fieldErrors.email}
//         />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           minLength={PASSWORD_MIN_LENGTH}
//           errors={state?.fieldErrors.password}
//         />
//         <Button text="Log In" />
//       </form>
//       <SocialLogin />
//     </div>
//   );
// };

// export default LogIn;



"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

const LogIn = () => {
  const [state, dispatch] = useFormState(login, null);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-6 py-10 px-6 bg-gray-50 rounded-2xl shadow-2xl relative overflow-hidden w-full max-w-md">
        {/* Curved Header Section */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-b-full z-0"></div>
        <div className="relative z-10 flex flex-col gap-2 font-medium text-center">
          <h1 className="text-2xl text-black">Welcome Back</h1>
          <h2 className="text-lg text-gray-600">Log in with your credentials</h2>
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
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={PASSWORD_MIN_LENGTH}
            errors={state?.fieldErrors.password}
          />
          <Button text="Log In" />
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default LogIn;

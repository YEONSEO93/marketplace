// "use client";

// import Button from "@/components/button";
// import Input from "@/components/input";
// import SocialLogin from "@/components/social-login";
// import { useFormState } from "react-dom";
// import { createAccount } from "./actions";
// import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

// export default function CreateAccount() {
//   const [state, dispatch] = useFormState(createAccount, null);
//   return (
//     <div className="flex flex-col gap-6 py-8 px-6">
//       <div className="flex flex-col items-center p-8 gap-10 *:font-medium">
//         <h1 className="text-9xl">🥯 </h1>
//         <h1 className="text-4xl">Bagel Marketplace</h1>
//       </div>

//       <form action={dispatch} className="flex flex-col gap-6">
//          <Input
//           name="username"
//           type="text"
//           placeholder="Username"
//           required
//           errors={state?.fieldErrors.username}
//           minLength={3}
//           maxLength={10}
//         />
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
//           minLength={PASSWORD_MIN_LENGTH}
//           required
//           errors={state?.fieldErrors.password}
//         />
//         <Input
//           name="confirm_password"
//           type="password"
//           placeholder="Confirm Password"
//           required
//           minLength={PASSWORD_MIN_LENGTH}
//           errors={state?.fieldErrors.confirm_password}
//         />
//         <Button text="Create account" />
//       </form>
//       <SocialLogin />
//     </div>
//   );
// }

 
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-6 py-8 px-6 max-w-md mx-auto bg-[#FFFBEA] text-[#333333] rounded-3xl shadow-lg">
      <div className="flex flex-col items-center p-8 gap-6">
        <h1 className="text-8xl">🥯</h1>
        <h1 className="text-3xl font-extrabold text-[#FF6B6B]">Bagel Marketplace</h1>
      </div>

      <form action={dispatch} className="flex flex-col gap-4">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
          className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
          className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          minLength={PASSWORD_MIN_LENGTH}
          required
          errors={state?.fieldErrors.password}
          className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.confirm_password}
          className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
        <Button text="Create account" className="w-full py-3 bg-[#FF6B6B] text-white font-bold rounded-full hover:bg-[#4ECDC4] transition" />
      </form>
      <SocialLogin />
    </div>
  );
}

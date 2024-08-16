// // "use client";

// // import FormButton from "@/components/button";
// // import FormInput from "@/components/input";
// // import SocialLogin from "@/components/social-login";
// // import { useFormState } from "react-dom";
// // import { login } from "./actions";
// // import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

// // export default function LogIn() {
// //   const [state, dispatch] = useFormState(login, null);
// //   return (
// //     <div className="flex flex-col gap-10 py-8 px-6">
// //       <div className="flex flex-col items-center p-8 gap-10 *:font-medium">
// //         <h1 className="text-9xl">🥯 </h1>
// //         <h1 className="text-4xl">Bagel Marketplace</h1>
// //       </div>
// //       <form action={dispatch} className="flex flex-col gap-3">
// //         <FormInput
// //           name="email"
// //           type="email"
// //           placeholder="Email"
// //           required
// //           errors={state?.fieldErrors.email}
// //         />
// //         <FormInput
// //           name="password"
// //           type="password"
// //           placeholder="Password"
// //           required
// //           minLength={PASSWORD_MIN_LENGTH}
// //           errors={state?.fieldErrors.password}
// //         />
// //         <FormButton text="Log in" />
// //       </form>
// //       <SocialLogin />
// //     </div>
// //   );
// // }


// "use client";

// import FormButton from "@/components/button";
// import FormInput from "@/components/input";
// import SocialLogin from "@/components/social-login";
// import { useFormState } from "react-dom";
// import { login } from "./actions";
// import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

// export default function LogIn() {
//   const [state, dispatch] = useFormState(login, null);
//   return (
//     <div className="flex flex-col gap-10 py-8 px-6 max-w-md mx-auto bg-gray-800 text-white rounded-3xl shadow-2xl">
//       <div className="flex flex-col items-center p-8 gap-6">
//         <h1 className="text-8xl">🥯</h1>
//         <h1 className="text-3xl font-extrabold text-teal-300">Bagel Marketplace</h1>
//       </div>
//       <form action={dispatch} className="flex flex-col gap-4">
//         <FormInput
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//           errors={state?.fieldErrors.email}
//           className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-full py-2 px-4 focus:border-teal-400 focus:ring-teal-400"
//         />
//         <FormInput
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           minLength={PASSWORD_MIN_LENGTH}
//           errors={state?.fieldErrors.password}
//           className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-full py-2 px-4 focus:border-teal-400 focus:ring-teal-400"
//         />
//         <FormButton text="Log in" className="w-full py-3 bg-teal-400 text-gray-900 font-bold rounded-full hover:bg-pink-400 transition" />
//       </form>
//       <SocialLogin />
//     </div>
//   );
// }


"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, dispatch] = useFormState(login, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6 max-w-md mx-auto bg-[#FFFBEA] text-[#333333] rounded-3xl shadow-lg">
      <div className="flex flex-col items-center p-8 gap-6">
        <h1 className="text-8xl">🥯</h1>
        <h1 className="text-3xl font-extrabold text-[#FF6B6B]">Bagel Marketplace</h1>
      </div>
      <form action={dispatch} className="flex flex-col gap-4">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
          className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
          className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
        />
        <FormButton text="Log in" className="w-full py-3 bg-[#FF6B6B] text-white font-bold rounded-full hover:bg-[#4ECDC4] transition" />
      </form>
      <SocialLogin />
    </div>
  );
}


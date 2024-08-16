
// // "use client";

// // import Button from "@/components/button";
// // import Input from "@/components/input";
// // import { useFormState } from "react-dom";
// // import { smsLogIn } from "./actions";

// // const initialState: any = {
// //   token: false,
// //   phone: "",
// //   error: undefined,
// // };

// // const SMSLogIn = () => {
// //   const [state, dispatch] = useFormState(smsLogIn, initialState);
// //   return (
// //     <div className="flex flex-col gap-10 py-8 px-6">
// //       <div className="flex flex-col gap-2 *:font-medium">
// //         <h1 className="text-2xl">SMS Login</h1>
// //         <h2 className="text-xl">Verify your phone number.</h2>
// //       </div>
// //       <form action={dispatch} className="flex flex-col gap-3">
// //         {!state?.token ? (
// //           <Input
// //             name="phone"
// //             type="text"
// //             placeholder="Phone number"
// //             required
// //             errors={state?.error?.formErrors}
// //             key="phone"
// //           />
// //         ) : (
// //           <Input
// //             name="token"
// //             type="number"
// //             min={100000}
// //             max={999999}
// //             placeholder="Verification code"
// //             required
// //             errors={state?.error?.fieldErrors?.token}
// //             key="token"
// //           />
// //         )}
// //         <Button
// //           text={state?.token ? "인증 번호 인증하기" : "인증 번호 발송하기"}
// //         />
// //       </form>
// //     </div>
// //   );
// // };

// // export default SMSLogIn;


// "use client";

// import Button from "@/components/button";
// import Input from "@/components/input";
// import { useFormState } from "react-dom";
// import { smsLogIn } from "./actions";

// const initialState: any = {
//   token: false,
//   phone: "",
//   error: undefined,
// };

// const SMSLogIn = () => {
//   const [state, dispatch] = useFormState(smsLogIn, initialState);
//   return (
//     <div className="flex flex-col gap-10 py-8 px-6 max-w-md mx-auto bg-gray-800 text-white rounded-3xl shadow-2xl">
//       <div className="flex flex-col gap-2">
//         <h1 className="text-3xl font-extrabold text-teal-300">SMS Login</h1>
//         <h2 className="text-xl text-gray-400">Verify your phone number.</h2>
//       </div>
//       <form action={dispatch} className="flex flex-col gap-4">
//         {!state?.token ? (
//           <Input
//             name="phone"
//             type="text"
//             placeholder="Phone number"
//             required
//             errors={state?.error?.formErrors}
//             key="phone"
//             className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-full py-2 px-4 focus:border-teal-400 focus:ring-teal-400"
//           />
//         ) : (
//           <Input
//             name="token"
//             type="number"
//             min={100000}
//             max={999999}
//             placeholder="Verification code"
//             required
//             errors={state?.error?.fieldErrors?.token}
//             key="token"
//             className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-full py-2 px-4 focus:border-teal-400 focus:ring-teal-400"
//           />
//         )}
//         <Button
//           text={state?.token ? "인증 번호 인증하기" : "인증 번호 발송하기"}
//           className="w-full py-3 bg-teal-400 text-gray-900 font-bold rounded-full hover:bg-pink-400 transition"
//         />
//       </form>
//     </div>
//   );
// };

// export default SMSLogIn;


"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

const initialState: any = {
  token: false,
  phone: "",
  error: undefined,
};

const SMSLogIn = () => {
  const [state, dispatch] = useFormState(smsLogIn, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6 max-w-md mx-auto bg-[#FFFBEA] text-[#333333] rounded-3xl shadow-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-[#FF6B6B]">SMS Login</h1>
        <h2 className="text-xl text-[#FF6B6B]">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-4">
        {!state?.token ? (
          <Input
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            errors={state?.error?.formErrors}
            key="phone"
            className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
          />
        ) : (
          <Input
            name="token"
            type="number"
            min={100000}
            max={999999}
            placeholder="Verification code"
            required
            errors={state?.error?.fieldErrors?.token}
            key="token"
            className="bg-[#FFF0E2] text-[#333333] placeholder-[#FF6B6B] border border-[#FFD3B6] rounded-full py-2 px-4 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
          />
        )}
        <Button
          text={state?.token ? "Verify Code" : "Send Code"}
          className="w-full py-3 bg-[#FF6B6B] text-white font-bold rounded-full hover:bg-[#4ECDC4] transition"
        />
      </form>
    </div>
  );
};

export default SMSLogIn;

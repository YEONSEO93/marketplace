
// "use client";

// import { useFormStatus } from "react-dom";

// interface ButtonProps {
//   text: string;
//   className?: string; // Accept the className prop

// }

// export default function Button({ text }: ButtonProps) {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       disabled={pending}
//       className="primary-btn h-12 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
//     >
//       {pending ? "Loading..." : text}
//     </button>
//   );
// }




"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
  className?: string; 
}

export default function Button({ text, className = "" }: ButtonProps) {
  const { pending } = useFormStatus();
  
  return (
    <button
      disabled={pending}
      className={`primary-btn h-12 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed ${className}`}
    >
      {pending ? "Loading..." : text}
    </button>
  );
}

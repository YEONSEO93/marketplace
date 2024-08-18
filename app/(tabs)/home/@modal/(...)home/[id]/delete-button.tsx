// "use client";

// import { onDelete } from "./actions";
// import { useState } from "react";

// const DeleteButton = ({ id, isOwner }: { id: number; isOwner: boolean }) => {
//   const [isLoading, setLoading] = useState(false);
//   const onClick = async () => {
//     const ok = window.confirm("Are you sure you want to delete this item?");
//     if (!ok) return;
//     setLoading(true);
//     await onDelete(id, isOwner);
//     setLoading(false);
//     window.location.href = "/home";
//   };
//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       className="bg-red-500 w-full h-10 rounded-md text-white font-semibold"
//     >
//       {isLoading ? "Deleting..." : "Delete"}
//     </button>
//   );
// };

// export default DeleteButton;




"use client";

import { onDelete } from "./actions";
import { useState } from "react";

const DeleteButton = ({ id, isOwner }: { id: number; isOwner: boolean }) => {
  const [isLoading, setLoading] = useState(false);
  const onClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this item?");
    if (!ok) return;
    setLoading(true);
    await onDelete(id, isOwner);
    setLoading(false);
    window.location.href = "/home";
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteButton;


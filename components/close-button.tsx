// 'use client';

// import { XMarkIcon } from '@heroicons/react/24/solid';
// import { useRouter } from 'next/navigation';

// export default function CloseButton() {
//   const router = useRouter();
//   const onCloseClick = () => {
//     router.back();
//   };

//   return (
//     <button
//       onClick={onCloseClick}
//       className='absolute top-4 right-8 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors'
//     >
//       <XMarkIcon className='h-6 w-6' />
//     </button>
//   );
// }







'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();

  const onCloseClick = () => {
    router.back();
  };

  return (
    <button
      onClick={onCloseClick}
      className='absolute top-4 right-8 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors'
    >
      <XMarkIcon className='h-6 w-6' />
    </button>
  );
}


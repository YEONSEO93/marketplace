// "use client";

// import Button from "@/components/button";
// import Input from "@/components/input";
// import { PhotoIcon } from "@heroicons/react/24/solid";
// import React, { useState } from "react";
// import { getUploadUrl, uploadProduct } from "./actions";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ProductType, productSchema } from "./schema";

// const AddProduct = () => {
//   const [preview, setPreview] = useState("");
//   const [uploadUrl, setUploadUrl] = useState("");
//   const [file, setFile] = useState<File | null>(null);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     setError,
//     formState: { errors },
//   } = useForm<ProductType>({
//     resolver: zodResolver(productSchema),
//   });
//   const onSubmit = handleSubmit(async (data: ProductType) => {
//     if (!file) return;
//     const cloudflareForm = new FormData();
//     cloudflareForm.append("file", file);
//     const response = await fetch(uploadUrl, {
//       method: "POST",
//       body: cloudflareForm,
//     });
//     if (response.status !== 200) {
//       return alert("Failed to upload the image.");
//     }
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("price", data.price + "");
//     formData.append("photo", data.photo);
//     const errors = await uploadProduct(formData);
//     if (errors) {
//       if (errors.fieldErrors.photo) {
//         setError("photo", { message: errors.fieldErrors.photo[0] });
//       }
//       if (errors.fieldErrors.title) {
//         setError("title", { message: errors.fieldErrors.title[0] });
//       }
//       if (errors.fieldErrors.price) {
//         setError("price", { message: errors.fieldErrors.price[0] });
//       }
//       if (errors.fieldErrors.description) {
//         setError("description", { message: errors.fieldErrors.description[0] });
//       }
//     }
//   });
//   const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       target: { files },
//     } = event;
//     if (!files) return;
//     if (files.length !== 1) return alert("Only one file can be uploaded.");
//     const MB = 1024 * 1024; // 1 MB
//     if (files[0].size > 5 * MB) return alert("File size must not exceed 5MB.");
//     const file = files[0];
//     const url = URL.createObjectURL(file);
//     setPreview(url);
//     setFile(file);
//     const { success, result } = await getUploadUrl();
//     if (success) {
//       const { id, uploadURL } = result;
//       setUploadUrl(uploadURL);
//       setValue(
//         "photo",
//         `https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/${id}`
//       );
//     }
//   };
//   const onValid = async () => {
//     await onSubmit();
//   };
//   return (
//     <div>
//       <form onSubmit={onValid} className="p-5 flex flex-col gap-3">
//         <label
//           htmlFor="photo"
//           className="border-2 aspect-square flex flex-col items-center justify-center gap-3 text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
//           style={{
//             backgroundImage: `url(${preview})`,
//           }}
//         >
//           {preview === "" ? (
//             <>
//               <PhotoIcon className="size-20" />
//               <div className="text-sm text-neutral-400">
//                 Please add a photo.
//               </div>
//             </>
//           ) : null}
//         </label>
//         {
//           <span className="text-red-500 font-medium">
//             {errors.photo?.message}
//           </span>
//         }
//         <input
//           type="file"
//           id="photo"
//           name="photo"
//           className="hidden"
//           accept="image/*"
//           onChange={onImageChange}
//         />
//         <Input
//           required
//           placeholder="Title"
//           type="text"
//           errors={[errors.title?.message ?? ""]}
//           {...register("title")}
//         />
//         <Input
//           required
//           placeholder="Price"
//           type="number"
//           errors={[errors.price?.message ?? ""]}
//           {...register("price")}
//         />
//         <Input
//           required
//           placeholder="Detailed description"
//           type="text"
//           errors={[errors.description?.message ?? ""]}
//           {...register("description")}
//         />
//         <Button text="Complete Submission" />
//       </form>
//     </div>
//   );
// };

// export default AddProduct;



// "use client";

// import Button from "@/components/button";
// import Input from "@/components/input";
// import { PhotoIcon } from "@heroicons/react/24/solid";
// import React, { useState } from "react";
// import { getUploadUrl, uploadProduct } from "./actions";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ProductType, productSchema } from "./schema";

// const AddProduct = () => {
//   const [preview, setPreview] = useState("");
//   const [uploadUrl, setUploadUrl] = useState("");
//   const [file, setFile] = useState<File | null>(null);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     setError,
//     formState: { errors },
//   } = useForm<ProductType>({
//     resolver: zodResolver(productSchema),
//   });

//   const onSubmit = handleSubmit(async (data: ProductType) => {
//     if (!file) {
//       alert("No file selected. Please select a photo to upload.");
//       return;
//     }

//     try {
//       console.log("Starting the upload process...");
//       const cloudflareForm = new FormData();
//       cloudflareForm.append("file", file);

//       const response = await fetch(uploadUrl, {
//         method: "POST",
//         body: cloudflareForm,
//       });

//       if (response.status !== 200) {
//         const responseBody = await response.json();
//         console.error("Failed to upload image to Cloudflare:", responseBody);
//         return alert("Failed to upload the image. Please try again.");
//       }

//       const formData = new FormData();
//       formData.append("title", data.title);
//       formData.append("description", data.description);
//       formData.append("price", data.price + "");
//       formData.append("photo", data.photo);
//       console.log("Form data being sent to the server:", formData);

//       const errors = await uploadProduct(formData);
//       if (errors) {
//         if (errors.fieldErrors.photo) {
//           setError("photo", { message: errors.fieldErrors.photo[0] });
//         }
//         if (errors.fieldErrors.title) {
//           setError("title", { message: errors.fieldErrors.title[0] });
//         }
//         if (errors.fieldErrors.price) {
//           setError("price", { message: errors.fieldErrors.price[0] });
//         }
//         if (errors.fieldErrors.description) {
//           setError("description", { message: errors.fieldErrors.description[0] });
//         }
//       }
//     } catch (error) {
//       console.error("An error occurred during the upload process:", error);
//       alert("An unexpected error occurred. Please try again.");
//     }
//   });

//   const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       target: { files },
//     } = event;
//     if (!files) return;
//     if (files.length !== 1) return alert("Only one file can be uploaded.");
//     const MB = 1024 * 1024; // 1 MB
//     if (files[0].size > 5 * MB) return alert("File size must not exceed 5MB.");
//     const file = files[0];
//     const url = URL.createObjectURL(file);
//     setPreview(url);
//     setFile(file);
//     try {
//       const { success, result } = await getUploadUrl();
//       console.log("Upload URL response:", { success, result });
//       if (success) {
//         const { id, uploadURL } = result;
//         setUploadUrl(uploadURL);
//         setValue(
//           "photo",
//           `https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/${id}`
//         );
//       } else {
//         console.error("Failed to get upload URL from Cloudflare:", result);
//         alert("Failed to get an upload URL. Please try again.");
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching the upload URL:", error);
//       alert("An unexpected error occurred while fetching the upload URL. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit} className="p-5 flex flex-col gap-3">
//         <label
//           htmlFor="photo"
//           className="border-2 aspect-square flex flex-col items-center justify-center gap-3 text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
//           style={{
//             backgroundImage: `url(${preview})`,
//           }}
//         >
//           {preview === "" ? (
//             <>
//               <PhotoIcon className="size-20" />
//               <div className="text-sm text-neutral-400">
//                 Please add a photo.
//               </div>
//             </>
//           ) : null}
//         </label>
//         {
//           <span className="text-red-500 font-medium">
//             {errors.photo?.message}
//           </span>
//         }
//         <input
//           type="file"
//           id="photo"
//           name="photo"
//           className="hidden"
//           accept="image/*"
//           onChange={onImageChange}
//         />
//         <Input
//           required
//           placeholder="Title"
//           type="text"
//           errors={[errors.title?.message ?? ""]}
//           {...register("title")}
//         />
//         <Input
//           required
//           placeholder="Price"
//           type="number"
//           errors={[errors.price?.message ?? ""]}
//           {...register("price")}
//         />
//         <Input
//           required
//           placeholder="Detailed description"
//           type="text"
//           errors={[errors.description?.message ?? ""]}
//           {...register("description")}
//         />
//         <Button text="Complete Submission" />
//       </form>
//     </div>
//   );
// };

// export default AddProduct;



"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { getUploadUrl, uploadProduct } from "./actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductType, productSchema } from "./schema";

const AddProduct = () => {
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = handleSubmit(async (data: ProductType) => {
    if (!file) {
      alert("No file selected. Please select a photo to upload.");
      return;
    }

    try {
      console.log("Starting the upload process...");
      const cloudflareForm = new FormData();
      cloudflareForm.append("file", file);

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: cloudflareForm,
      });

      if (response.status !== 200) {
        const responseBody = await response.json();
        console.error("Failed to upload image to Cloudflare:", responseBody);
        return alert("Failed to upload the image. Please try again.");
      }

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price + "");
      formData.append("photo", data.photo);
      console.log("Form data being sent to the server:", formData);

      const errors = await uploadProduct(formData);
      if (errors) {
        if (errors.fieldErrors.photo) {
          setError("photo", { message: errors.fieldErrors.photo[0] });
        }
        if (errors.fieldErrors.title) {
          setError("title", { message: errors.fieldErrors.title[0] });
        }
        if (errors.fieldErrors.price) {
          setError("price", { message: errors.fieldErrors.price[0] });
        }
        if (errors.fieldErrors.description) {
          setError("description", { message: errors.fieldErrors.description[0] });
        }
      }
    } catch (error) {
      console.error("An error occurred during the upload process:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  });

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) return;
    if (files.length !== 1) return alert("Only one file can be uploaded.");
    const MB = 1024 * 1024; // 1 MB
    if (files[0].size > 5 * MB) return alert("File size must not exceed 5MB.");
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFile(file);
    try {
      const { success, result } = await getUploadUrl();
      console.log("Upload URL response:", { success, result });
      if (success) {
        const { id, uploadURL } = result;
        setUploadUrl(uploadURL);
        setValue(
          "photo",
          `https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/${id}`
        );
      } else {
        console.error("Failed to get upload URL from Cloudflare:", result);
        alert("Failed to get an upload URL. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while fetching the upload URL:", error);
      alert("An unexpected error occurred while fetching the upload URL. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full bg-white p-6 shadow-md">
        <h1 className="text-indigo-600 text-4xl font-extrabold text-center tracking-tight">
          Add a New Product
        </h1>
      </header>

      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg flex flex-col gap-5 mt-8"
      >
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex flex-col items-center justify-center gap-3 text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="size-20" />
              <div className="text-sm text-neutral-400">
                Please add a photo.
              </div>
            </>
          ) : null}
        </label>
        <span className="text-red-500 font-medium">{errors.photo?.message}</span>
        <input
          type="file"
          id="photo"
          name="photo"
          className="hidden"
          accept="image/*"
          onChange={onImageChange}
        />
        <Input
          required
          placeholder="Title"
          type="text"
          errors={[errors.title?.message ?? ""]}
          {...register("title")}
        />
        <Input
          required
          placeholder="Price"
          type="number"
          errors={[errors.price?.message ?? ""]}
          {...register("price")}
        />
        <Input
          required
          placeholder="Detailed description"
          type="text"
          errors={[errors.description?.message ?? ""]}
          {...register("description")}
        />
        <Button text="Complete Submission" />
      </form>
    </div>
  );
};

export default AddProduct;

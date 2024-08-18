"use client";

import { useEffect, useState } from "react";
import { ProductType, productSchema } from "../app/home/add/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getUploadUrl } from "../app/home/add/actions";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Input from "./input";
import Button from "./button";
import DeleteButton from "@/app/(tabs)/home/@modal/(...)home/[id]/delete-button";
import { deletePhoto, editProduct } from "@/app/home/[id]/edit/actions";

const EditForm = ({
  id,
  product,
  isOwner,
}: {
  id: number;
  product: ProductType;
  isOwner: boolean;
}) => {
  const [preview, setPreview] = useState(`${product.photo}/public`);
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
    if (!file && !preview) return;
    if (file) {
      const photoId = product.photo.split("https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/")[1];
      await deletePhoto(photoId);
      const cloudflareForm = new FormData();
      cloudflareForm.append("file", file);
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: cloudflareForm,
      });
      if (response.status !== 200) {
        return alert("Failed to upload the image.");
      }
    }
    const formData = new FormData();
    formData.append("id", id + "");
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price + "");
    formData.append("photo", data.photo);
    const errors = await editProduct(formData);
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
  });

  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { files } } = event;
    if (!files) return;
    if (files.length !== 1) return alert("Only one file can be uploaded.");
    const MB = 1024 * 1024; // 1 MB
    if (files[0].size > 5 * MB) return alert("File size must not exceed 5MB.");
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFile(file);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setValue("photo", `https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/${id}`);
    }
  };

  const onValid = async () => {
    await onSubmit();
  };

  useEffect(() => {
    const photoId = product.photo.split("https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/")[1];
    setValue("photo", `https://imagedelivery.net/946t3Bn7epLNWC96BjzU3Q/${photoId}`);
  }, [product, setValue]);

  return (
    <form onSubmit={onValid} className="p-5 flex flex-col gap-3">
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
              Add a photo.
            </div>
          </>
        ) : null}
      </label>
      {
        <span className="text-red-500 font-medium">
          {errors.photo?.message}
        </span>
      }
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
        defaultValue={product.title}
        type="text"
        errors={[errors.title?.message ?? ""]}
        {...register("title")}
      />
      <Input
        required
        placeholder="Price"
        defaultValue={product.price}
        type="number"
        errors={[errors.price?.message ?? ""]}
        {...register("price")}
      />
      <Input
        required
        placeholder="Detailed description"
        defaultValue={product.description}
        type="text"
        errors={[errors.description?.message ?? ""]}
        {...register("description")}
      />
      <Button text="Update" />
      <DeleteButton id={id} isOwner={isOwner} />
    </form>
  );
};

export default EditForm;

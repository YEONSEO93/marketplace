import { z } from "zod";

export const productSchema = z.object({
  id: z.coerce.number().optional(),
  photo: z.string({
    required_error: "Photo is required.",
  }),
  title: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title must be a string.",
    })
    .min(3, "Title must be at least 3 characters long."),
  description: z
    .string({
      required_error: "Description is required.",
      invalid_type_error: "Description must be a string.",
    })
    .min(3, "Description must be at least 3 characters long."),
  price: z.coerce
    .number({
      required_error: "Price is required.",
      invalid_type_error: "Price must be a number.",
    })
    .min(1, "Price must be at least 1."),
});

export type ProductType = z.infer<typeof productSchema>;

import { z } from "zod";

export const productSchema = z.object({
  id: z.coerce.number().optional(),
  photo: z.string({
    required_error: "A photo is required.",
  }),
  title: z
    .string({
      required_error: "Please enter a title.",
      invalid_type_error: "The title must be in text format.",
    })
    .min(3, "The title must be at least 3 characters."),
  description: z
    .string({
      required_error: "Please enter a description.",
      invalid_type_error: "The description must be in text format.",
    })
    .min(3, "The description must be at least 3 characters."),
  price: z.coerce
    .number({
      required_error: "Please enter a price.",
      invalid_type_error: "The price must be in numeric format.",
    })
    .min(1, "The price must be at least 1."),
});

export type ProductType = z.infer<typeof productSchema>;

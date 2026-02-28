import * as z from "zod";

const ReviewSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "Name must be at most 20 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Name must be at most 20 characters"),
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "The title must be at most 50 characters"),
  email: z
    .email()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  rating: z
    .number()
    .min(1, "Rating should be at least 1")
    .max(5, "Rating cannot be more than 5"),
  comment: z.string().min(1, "Comment should not be empty"),
  age: z.string().min(1, "This field should not be left empty"),
  skinTone: z.string().min(1, "This field should not be left empty"),
  skinType: z.string().min(1, "This field should not be left empty"),
  skinConcern: z.string().min(1, "This field should not be left empty"),
});

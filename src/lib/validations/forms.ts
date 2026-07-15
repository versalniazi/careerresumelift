import { z } from "zod";

export const leadCaptureSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
});

export type LeadCaptureValues = z.infer<typeof leadCaptureSchema>;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  service: z.string().trim().min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a bit more (at least 20 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

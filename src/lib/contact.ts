import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  phone: z.string().trim().max(30, "Phone number is too long").optional().or(z.literal("")),
  company: z.string().trim().max(150, "Company name is too long").optional().or(z.literal("")),
  subject: z.string().trim().max(100).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please write a short message")
    .max(2000, "Message must be under 2000 characters"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export async function submitEnquiry(input: EnquiryInput) {
  const data = enquirySchema.parse(input);
  const { error } = await supabase.from("contact_enquiries").insert({
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    company: data.company || null,
    subject: data.subject || null,
    message: data.message,
  });
  if (error) throw new Error(error.message);
}

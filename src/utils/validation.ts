import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid corporate email address." }),
  company: z.string().min(2, { message: "Company name is required." }),
  inquiryType: z.enum([
    "Executive Search", 
    "Permanent Staffing",
    "Contract Staffing", 
    "RPO Services",
    "Education & Training", 
    "Workforce Consulting",
    "Healthcare and Life Sciences",
    "IT and Technology", 
    "Other"
  ], { message: "Please select an inquiry type." }), // FIXED: Changed required_error to message
  message: z.string().min(10, { message: "Please provide more details about your requirement." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
import { z } from 'zod'

export const FormSchema = z.object({
  email: z.email("Valid email required"),
});

export type FormSchemaType = z.infer<typeof FormSchema>; // Inferir tipo TypeScript
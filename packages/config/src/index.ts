import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().url().optional(),
  PORT: z.coerce.number().default(3000)
});

export const env = schema.parse(process.env);

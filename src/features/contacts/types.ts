import type z from 'zod';
import type { contactSchema } from './schema';

export type Contact = z.infer<typeof contactSchema> & { id: string };

import z from 'zod';

export const contactSchema = z.object({
  firstName: z.string('Imię musi być tekstem').min(1, 'Imię jest wymagane'),
  email: z.email('Nieprawidłowy format e-mail'),
  phoneNumber: z
    .number('Numer telefonu musi być liczbą')
    .min(100000000, 'Numer telefonu musi mieć przynajmniej 9 cyfr')
    .max(999999999, 'Numer telefonu nie może mieć więcej niż 9 cyfr'),
});

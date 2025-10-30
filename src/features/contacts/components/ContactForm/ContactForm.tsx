import { FormField } from '@/ui/FormField';
import { Form } from './ContactForm.styles';
import { Button } from '@/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../../schema';
import type { Contact } from '../../types';
import { useContacts } from '../../context';

export const ContactForm = () => {
  const { addContact } = useContacts();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: Omit<Contact, 'id'>) => {
    addContact(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="E-mail"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <FormField
        label="Imię"
        type="text"
        {...register('firstName')}
        error={errors.firstName?.message}
      />
      <FormField
        type="number"
        label="Numer"
        {...register('phoneNumber', { valueAsNumber: true })}
        hint="Numer 9 cyfrowy."
        error={errors.phoneNumber?.message}
      />
      <Button type="submit">Zapisz</Button>
    </Form>
  );
};

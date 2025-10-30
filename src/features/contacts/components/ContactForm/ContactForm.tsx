import { FormField } from '@/ui/FormField';
import { Form } from './ContactForm.styles';
import { Button } from '@/ui/Button';

export const ContactForm = () => {
  return (
    <Form>
      <FormField label="E-mail" type="email" />
      <FormField label="Imię" type="text" />
      <FormField type="number" label="Numer" hint="Numer 9 cyfrowy." />
      <Button type="submit">Zapisz</Button>
    </Form>
  );
};

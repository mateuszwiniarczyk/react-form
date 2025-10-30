import {
  Input,
  InputHint,
  Label,
  InputWrapper,
  FormFieldWrapper,
} from './FormField.styles';

type FormFieldProps = {
  label: string;
  hint?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormField = ({ label, error, hint, ...props }: FormFieldProps) => (
  <FormFieldWrapper>
    <InputWrapper>
      <Input placeholder="" {...props} isError={!!error} />
      <Label>{label}</Label>
    </InputWrapper>
    {hint && !error && <InputHint>{hint}</InputHint>}
    {error && (
      <InputHint role="alert" isError>
        {error}
      </InputHint>
    )}
  </FormFieldWrapper>
);

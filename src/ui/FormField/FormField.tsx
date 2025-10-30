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

export const FormField = ({
  label,
  error,
  hint,
  name,
  ...props
}: FormFieldProps) => {
  const hintId = `${name}Hint`;

  return (
    <FormFieldWrapper>
      <InputWrapper>
        <Input
          name={name}
          id={name}
          placeholder=""
          $isError={!!error}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={hintId}
          {...props}
        />
        <Label htmlFor={name}>{label}</Label>
      </InputWrapper>
      {hint && !error && <InputHint id={hintId}>{hint}</InputHint>}
      {error && (
        <InputHint id={hintId} role="alert" $isError={true}>
          {error}
        </InputHint>
      )}
    </FormFieldWrapper>
  );
};

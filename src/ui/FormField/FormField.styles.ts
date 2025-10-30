import styled from 'styled-components';

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  &:focus-within label {
    top: 0.8rem;
    transform: translateY(-1.6rem);
  }
`;

type InputProps = {
  $isError?: boolean;
};

export const Input = styled.input<InputProps>`
  display: block;
  height: 6.5rem;
  width: 100%;
  padding: 0 3.2rem;
  font-size: 1.6rem;
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  border: 0.2rem solid
    ${({ theme, $isError }) => ($isError ? theme.color.red : theme.color.gray)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  appearance: none;
  outline: none;

  &:not(:placeholder-shown) + label {
    top: 0.8rem;
    transform: translateY(-1.6rem);
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  left: 2.4rem;
  transform: translateY(-50%);
  padding: 0 0.8rem;
  font-size: 1.6rem;
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.darkGray};
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    ${({ theme }) => theme.color.white} 50%,
    ${({ theme }) => theme.color.white} 100%
  );
  pointer-events: none;
  transition: all 150ms ease-out;
`;

type InputHintProps = {
  $isError?: boolean;
};

export const InputHint = styled.span<InputHintProps>`
  display: block;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme, $isError }) =>
    $isError ? theme.color.red : theme.color.darkGray};
`;

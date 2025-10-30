import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 2.2rem 3.4rem;
  background-color: ${(props) => props.theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1.8rem;
  letter-spacing: 0.05rem;
  transition: opacity 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem 0;
  flex: 1 1 50%;

  ${({ theme }) => theme.mq.md} {
    padding-right: 5.6rem;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -0.1rem;
      width: 0.2rem;
      height: 100%;
      background-color: ${({ theme }) => theme.color.gray};
    }
  }

  ${({ theme }) => theme.mq.lg} {
    padding-right: 7.6rem;
  }
`;

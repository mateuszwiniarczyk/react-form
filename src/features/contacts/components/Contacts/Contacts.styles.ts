import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem 0;
  padding: 3.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.lg} {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
    max-width: 100.6rem;
  }
`;

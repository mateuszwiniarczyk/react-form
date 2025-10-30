import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  ${({ theme }) => theme.mq.md} {
    flex: 1 1 50%;
    padding-left: 5.6rem;
    height: stretch;
  }

  ${({ theme }) => theme.mq.lg} {
    padding-left: 7.6rem;
  }
`;

export const ContactListHeading = styled.h3`
  color: ${({ theme }) => theme.color.blue};
`;

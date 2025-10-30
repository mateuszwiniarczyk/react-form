import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  ${({ theme }) => theme.mq.lg} {
    flex: 1 1 50%;
    padding-left: 7.6rem;
    height: stretch;
  }
`;

export const ContactListHeading = styled.h3`
  color: ${({ theme }) => theme.color.blue};
`;

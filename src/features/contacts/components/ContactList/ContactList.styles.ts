import styled from 'styled-components';

export const ContactListWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const StyledContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  overflow-y: auto;
  height: 30rem;

  ${({ theme }) => theme.mq.md} {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
  }
`;

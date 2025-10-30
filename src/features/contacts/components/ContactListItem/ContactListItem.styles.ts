import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => theme.color.gray};
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1 1 0%;
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};
  min-width: 0;
`;

export const ContactName = styled.h4`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const DeleteContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6rem;
  width: 3.6rem;
  margin-left: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.color.darkGray};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.red};
    background-color: ${({ theme }) => theme.color.lightRed};
  }
`;

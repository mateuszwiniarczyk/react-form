import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

type IconWrapperProps = {
  $variant: 'blue' | 'green';
};

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.roundedFull};
  color: ${({ theme }) => theme.color.white};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'green':
        return css`
          background-color: ${theme.color.lightGreen};
          color: ${theme.color.green};
        `;
      case 'blue':
      default:
        return css`
          background-color: ${theme.color.lightBlue};
          color: ${theme.color.blue};
        `;
    }
  }}
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 450;
  color: ${({ theme }) => theme.color.black};
`;

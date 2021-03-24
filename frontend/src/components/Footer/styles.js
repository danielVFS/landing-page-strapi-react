import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;

    a {
      color: inherit;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

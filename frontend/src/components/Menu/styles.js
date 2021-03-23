import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    > ${SectionContainer} {
      padding-bottom: 0;
      padding-top: 0;
    }

    & ${Heading} {
      margin-bottom: 0;
      margin-top: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        margin: 0;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.font.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.font.spacings.large} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css``}
`;

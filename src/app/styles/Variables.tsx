import { css } from 'styled-components';

export const colors = {
  dark: '#0a0911',
  light: '#ffffff',
  primary: '#171717',
  secondary: '#8941e6',
  tertiary: '#2ef5f5',
  accent: '#03fa2e',
};

export const lineHeights = {
  h: '1.2',
  sm: '1.3',
  md: '1.6',
};

export const maxWidth = (media: string, children: string) => css`
  @media only screen and (max-width: ${media}) {
    ${children}
  }
`;

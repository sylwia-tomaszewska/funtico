import { colors, lineHeights } from '@/app/styles/Variables';
import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(79.125rem + 2rem);
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Slide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 79.125rem;
  height: 472px;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 40rem;
  font-size: 1rem;
  padding: 5rem;
  height: 100%;
  background: linear-gradient(90deg, hsla(0, 0%, 0%, 0.9) 0%, hsla(0, 0%, 0%, 0.7) 80%, hsla(0, 0%, 0%, 0) 100%);
  @media screen and (max-width: 48rem) {
    padding: 2rem 2rem 3rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  line-height: ${lineHeights.sm};
`;

export const Text = styled.p`
  color: hsl(249, 15%, 55%);
  margin-top: 1rem;
  font-weight: 600;
  line-height: ${lineHeights.md};
`;

export const Button = styled.a`
  display: inline-flex;
  margin-top: 2.5rem;
  padding: 1rem 2.5rem;
  background: radial-gradient(
    ellipse at 10% -50%,
    ${colors.accent} 0%,
    hsl(143, 61%, 46%) 20%,
    ${colors.tertiary} 40%,
    ${colors.secondary} 65%,
    ${colors.secondary} 80%,
    ${colors.tertiary} 110%
  );
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const ProgressAnimation = keyframes`
  from {
    transform: scaleX(100%);
  }
  to {
    transform: scaleX(0%);
  }
`;

export const Thumb = styled.div<{ $animate: boolean; $play: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: filter 0.4s ease-in-out;
  filter: ${({ $animate }) => !$animate && 'saturate(0)'};
  img {
    transition: filter 0.4s ease-in-out;
    filter: ${({ $animate }) => $animate && 'saturate(0)'};
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: url('/border.svg') no-repeat center center/cover;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: hsla(0, 0%, 0%, 0.5);
    transform-origin: right;
    animation: ${({ $animate }) =>
      $animate
        ? css`
            ${ProgressAnimation} 3000ms linear forwards
          `
        : ''};
    animation-play-state: ${({ $play, $animate }) => ($play && $animate ? 'paused' : 'running')};
  }
  @media screen and (max-width: 48rem) {
    width: 5rem;
    height: 5rem;
  }
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: -3.5rem;
  right: 4rem;
  width: 100%;
  max-width: calc(21rem + 7rem);
  padding-right: 3rem;
  .swiper-slide {
    width: 7rem;
    height: 7rem;
    &-thumb-active {
      ${Thumb} {
        filter: saturate(1);
        &::after {
          content: none;
        }
      }
    }
  }
  @media screen and (max-width: 48rem) {
    bottom: -2.5rem;
    right: 1rem;
    max-width: calc(15rem + 7rem);
    .swiper-slide {
      width: 5rem;
      height: 5rem;
    }
  }
  @media screen and (max-width: 26rem) {
    max-width: calc(100vw - 3rem);
  }
`;

export const Icon = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0;
  text-decoration: none;
  background: none;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

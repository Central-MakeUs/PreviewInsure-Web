import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'small' | 'medium' | 'large';

export const breakpoints: Record<Breakpoints, string> = {
  small: '@media (max-width: 1047px)',
  medium: '@media (max-width: 1366px)',
  large: '@media (min-width: 1367px)',
};

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first: CSSObject | TemplateStringsArray, ...interpolations: Interpolation<Object>[]) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Breakpoints, any>;

export default media;

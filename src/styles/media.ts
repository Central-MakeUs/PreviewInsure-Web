import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'mobile' | 'small' | 'medium' | 'large' | 'xlarge';

export const breakpoints: Record<Breakpoints, string> = {
  mobile: '@media (max-width: 768px)', // ~ 767
  small: '@media (max-width: 991px)', // 768 ~ 990
  medium: '@media (max-width: 1200px)', // 992 ~ 1199
  large: '@media (max-width: 1610px)', // 1201~ 1609
  xlarge: '@media (min-width: 1610px)', // 1610>
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

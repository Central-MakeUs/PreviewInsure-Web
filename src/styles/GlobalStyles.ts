import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import media from './media';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  // 브라우저 환경마다 다른 css를 초기화 한다.
  ${reset}

  html {
    font-size: 62.5%; //10px
    height: 100%;
    ${media.medium`
    font-size:50%;
    `}
  }

  body,
  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    /* 테두리를 기준으로 크기를 정함. */
    box-sizing: border-box;
  }

  * {
    font-family: 'Pretendard';
  }

  body {
    font-family: 'Pretendard', sans-serif;
    min-width: 320px;
    margin: 0;
    min-height: 100vh;
  }

  a {
    color: #1e87f0;
    text-decoration: inherit;
  }
  a:hover {
    color: #0f6ecd;
  }

  b,
  strong {
    font-weight: bolder;
  }
`;

export default GlobalStyle;

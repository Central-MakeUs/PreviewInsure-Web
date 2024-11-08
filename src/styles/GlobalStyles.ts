import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import media from './media';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  // 브라우저 환경마다 다른 css를 초기화 한다.
  ${reset}

  html {
    line-height: normal;
    /* font-size: 62.5%; //10px */
    font-size: 55%;
    height: 100%;
    ${media.large`
    font-size:48%;
    `}
    ${media.medium`
    // 992 ~ 1199
    font-size:35%;
    `}
    ${media.small`   
    // 768 ~ 990  모바일 기준
    font-size:28%;
    `}
    ${media.mobile`
    // 767 < 
      /* font-size:25%; */
      font-size:4px;
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

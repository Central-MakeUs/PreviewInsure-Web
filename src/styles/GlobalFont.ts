import { createGlobalStyle } from 'styled-components';
import PretendardRegular from '@assets/font/Pretendard-Regular.subset.woff2';
import PretendardMedium from '@assets/font/Pretendard-Medium.subset.woff2';
import PretendardSemiBold from '@assets/font/Pretendard-SemiBold.subset.woff2';

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src:
            local('Pretendard'),
            url(${PretendardRegular}) format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        src:
            local('Pretendard'),
            url(${PretendardMedium}) format('woff2');
        font-display: swap;
    }

    @font-face {
        font-family: 'Pretendard';
        font-style: bold;
        font-weight: 600;
        src:
            local('NotoSansKR'),
            url(${PretendardSemiBold}) format('woff2');
        font-display: swap;
    }

`;

export default GlobalFont;

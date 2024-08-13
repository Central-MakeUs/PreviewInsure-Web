import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import HomeScreen from '@screens/homeScreen';
import TestScreen1 from '@screens/testScreen1';
import TestScreen2 from '@screens/testScreen2';
import LoginScreen from '@screens/LoginAndRegister/LoginScreen';
import RegisterScreen from '@screens/LoginAndRegister/RegisterScreen';
import RegisterAgree from '@screens/LoginAndRegister/RegisterAgree';
import RegisterNickname from '@screens/LoginAndRegister/RegisterNickname';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import GoogleLoginCallback from '@screens/LoginAndRegister/GoogleLoginCallback';
import InsueBordingScreen from '@screens/InsueBording/InsueBordingScreen';
import UserInfoScreen from '@screens/User/UserInfoScreen';
import MainScreen from '@screens/Main/MainScreen';
import InsuePlannerScreen from '@screens/InsuePlanner/InsuePlannerScreen';
import Question from '@screens/Question/Question';
import AppleLoginCallback from '@screens/LoginAndRegister/AppleLoginCallback';
import Congratulate from '@components/InsueBoarding/Congraulate';
import InsueMapScreen from '@screens/InsueMap/InsueMapScreen';
import BottomNav from './BottomNav';
import media from '@styles/media';
import { useEffect, useState } from 'react';
import { useStore } from '@stores/useStore';

import PolicyPrivacyScreen from '@screens/Main/PolicyPrivacyScreen';
import PolicyServiceScreen from '@screens/Main/PolicyServiceScreen';

const PrivateRoute = () => {
  const { isLogin } = useStore();
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

const rootRouter = () => {
  // 모바일 사이즈에서만 BottomNav를 랜더링 하도록 함.
  // BottomNav에 스크롤 이벤트가 있기 때문.
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <WrapContent>
        <Header />

        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/test1" element={<TestScreen1 />} />
          <Route path="/test2" element={<TestScreen2 />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/registerAgree" element={<RegisterAgree />} />
          <Route path="/registerNickname" element={<RegisterNickname />} />
          <Route path="/callback/google" element={<GoogleLoginCallback />} />
          <Route path="/callback/apple" element={<AppleLoginCallback />} />
          <Route path="/insueBording" element={<InsueBordingScreen />} />
          <Route path="/congratulate" element={<Congratulate />} />
          <Route path="/insueMap" element={<InsueMapScreen />} />

          <Route path="/insuePlanner" element={<InsuePlannerScreen />} />
          <Route path="/question" element={<Question />} />

          <Route path="/policy/service" element={<PolicyServiceScreen />} />
          <Route path="/policy/privacy" element={<PolicyPrivacyScreen />} />

          {/* 로그인시에만 진입 가능 */}
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserInfoScreen />} />
          </Route>
        </Routes>
      </WrapContent>

      {isMobile ? <BottomNav /> : <Footer />}
    </BrowserRouter>
  );
};

const WrapContent = styled.div`
  height: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 19rem; //footer

  ${media.mobile`
    padding-bottom: 78px; // BottomNav
  `}
`;

export default rootRouter;

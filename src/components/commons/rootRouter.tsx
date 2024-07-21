import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const rootRouter = () => {
  return (
    <BrowserRouter>
      <WrapContent>
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/test1" element={<TestScreen1 />} />
          <Route path="/test2" element={<TestScreen2 />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/registerAgree" element={<RegisterAgree />} />
          <Route path="/registerNickname" element={<RegisterNickname />} />
        </Routes>
      </WrapContent>

      <Footer />
    </BrowserRouter>
  );
};

const WrapContent = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 19rem; //footer
  position: relative;
`;

export default rootRouter;

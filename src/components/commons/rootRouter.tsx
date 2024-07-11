import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '@screens/homeScreen';
import TestScreen1 from '@screens/testScreen1';
import TestScreen2 from '@screens/testScreen2';

const rootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/test1" element={<TestScreen1 />} />
        <Route path="/test2" element={<TestScreen2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default rootRouter;

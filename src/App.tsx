import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/notFound';
import AboutUs from './pages/aboutUs';
import Header from './components/header';
import { withRouter } from './helper/withRouter';
import FormPage from './pages/formPage';

const HeaderWithRouter = withRouter(Header);

const App = () => {
  return (
    <>
      <HeaderWithRouter />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/main" replace />} /> */}
        <Route index element={<Main />} />
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;

import './App.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/notFound';
import AboutUs from './pages/aboutUs';
import Header from './components/Header';
import { withRouter } from './helper/withRouter';

const HeaderWithRouter = withRouter(Header);

class App extends React.Component {
  state = { count: 0 };

  render(): React.ReactNode {
    return (
      <>
        <HeaderWithRouter />
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
export default App;

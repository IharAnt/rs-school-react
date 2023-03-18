import reactLogo from './assets/react.svg';
import './App.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/notFound';
import AboutUs from './pages/aboutUs';
import Header from './components/Header';
import { withRouter } from './helper/withRouter';

export class App1 extends React.Component {
  state = { count: 0 };

  render(): React.ReactNode {
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React2</h1>
        <div className="card">
          <button onClick={() => this.setState({ count: this.state.count + 2 })}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the fgh fgh dfg hdfg h</p>
      </div>
    );
  }
}

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

import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import AuthorsPage from './pages/AuthorsPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<AuthorsPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

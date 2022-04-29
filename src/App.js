import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/nav-bar/NavBar';
import Categories from './pages/Categories';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

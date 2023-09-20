import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import University from './pages/University';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/university' element={<University/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;

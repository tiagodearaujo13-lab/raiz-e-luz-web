import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecoes" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}
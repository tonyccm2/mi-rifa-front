import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import { Admin } from './pages/admin';
import { Home } from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/home/*" element={<Home />} />
      </Routes>
      <Routes>
        <Route index path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

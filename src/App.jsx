import './App.css';
import { selectCounter } from './redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Adopt } from './pages/Adopt';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/adopt" element={<Adopt/>} />
        <Route path="*" element={"not found"} />
      </Route>
    </Routes>
  );
}

export default App;

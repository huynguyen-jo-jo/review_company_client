
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';
import Desktop3 from './components/Desktop3';
import Desktop7 from './components/Desktop7';
import Desktop1 from './components/Desktop1/Desktop1'
import HomePages from './components/home_Pages/home_Pages';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Desktop3/>} path="/desktop-3"/>
          <Route element={<Desktop7/>} path="/desktop-7"/>
          <Route element={<Desktop1/>} path="/desktop-1"/>
          <Route element={<HomePages/>} path="/HomePages"/>
          <Route element={<Login/>} path="/Login"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

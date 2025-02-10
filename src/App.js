
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import "./styles/reset.scss"
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </Router>
  );
}

export default App;

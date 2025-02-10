
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/index';
import "./styles/reset.scss"
import SignUp from './pages/Signup/index';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  </Router>
  );
}

export default App;

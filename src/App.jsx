import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import NotFound from './pages/notFund/page';
import Home from './pages/home/layout';
import SignIn from './pages/signIn/page';
import SignUp from './pages/signUp/page';
function App() {
  
 fetch("/api/isValid").then(res => res.json())
 .then(data => console.log(data)
 )
  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
           {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;

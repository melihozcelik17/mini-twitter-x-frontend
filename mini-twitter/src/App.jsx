import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login'
// import SingUp from './components/SingUp'
// import SingUpForm from "./components/SignUpForm"
// import Footer from './components/Footer'
import SignUpForm from './components/SignUpForm';
import { MyContext } from "./Context";
import Profile from './components/Profile';

function App() {



  return (
    <MyContext.Provider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>

    </MyContext.Provider>

  )
}

export default App

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/home';
import Signin from './pages/signin';
import Signout from './pages/signout';
import Profile from "./pages/Profile";
import About from "./pages/about";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-out" element={<Signout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

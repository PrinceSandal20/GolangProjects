import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "./pages/About";
import Register from "./pages/register";
import Login from "./pages/login";
import AddProductPage from "./pages/AddProductPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import Cart from "./pages/Cart";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>} />
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/profile" exact element={<ProfilePage/>} />
          <Route path="/editprofile" exact element={<EditProfilePage/>} />
          <Route path="/addproduct" exact element={<AddProductPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;

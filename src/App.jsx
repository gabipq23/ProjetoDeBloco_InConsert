import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Profile from './pages/Profile/Profile';
import AddPost from './pages/AddPost/AddPost';
import PostsList from './pages/PostsList/PostsList';
import SignUp from './pages/SignUp/SignUp';
import {Footer}  from './components/Footer';
import useAuthStore from './store/AuthStore';


function App() {

  const usuario = useAuthStore((state) => state.usuario);

  return (

      <Router>
        
        <header  className="container-appBar">
        <div className="logo">
            <a href='/'>In Consert</a>
          </div>
          <nav className="menu">
            <Link to='/'>Home</Link>
            {usuario ?  <Link to='/profile'>Profile</Link> : null}
           
            <Link data-cy="menu_post" to='/postsList'>Publicações</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile /> } />
          <Route path="/posts" element={<Posts /> } />
          <Route path="/addPost" element={<AddPost /> } />
          <Route path="/postsList" element={<PostsList /> } />
          <Route path="/signUp" element={<SignUp /> } />


        </Routes>
        <Footer />

      </Router>
    
  )
}

export default App

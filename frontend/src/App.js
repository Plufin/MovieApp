import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Profile from './pages/Profile';
import Favourites from './pages/Favourites';
import Settings from './pages/Settings';
import Discover from './pages/Discover';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Link to={'/'}>Home </Link>
      <Link to={'/discover'}>Discover</Link>
      <Link to={'/news'}>News </Link>
      <Link to={'/settings'}>Settings </Link>
      <Link to={'/group'}>Group </Link>
      <Link to={'/profile'}>Profile </Link>
      <Link to={'/details'}>Details </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/details' element={<Details />} />
        <Route path='/settings' element={<h1>Settings</h1>} />
        <Route path='/news' element={<News />} />
        <Route path='/group' element={<Group />} />
        <Route path="/profile" element={<Profile />}> 
            <Route path="favourites" element={<Favourites />} /> 
        </Route>
        {/*Add more routes here*/}
        <Route path='*' element={<h1>Page Not Found</h1>} /> {/*If route is not found, this is displayed*/}
      </Routes>
    </BrowserRouter>
  );
}

function Group() {
  return (
    <div>
      <h2>Group</h2>
    </div>
  )
}

export default App

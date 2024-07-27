import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Search from './search';
import TempleDisplay from './TempleDisplay';
import TempleDetailsPage from './templedetailspage';
import Photo from './photo';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="/TempleDisplay" element={<TempleDisplay />} />
        <Route path="/templedetailspage" element={<TempleDetailsPage />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Favourites from './components/Favourites';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Movies />
            </>
          }>
          </Route>

          <Route path='/fav' element={
            <>
              <Favourites />
            </>
          }>
          </Route>

          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

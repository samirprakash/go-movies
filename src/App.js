import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/admin.component';
import Categories from './components/categories/categories.component';
import Category from './components/categories/category.component';
import Home from './components/home/home.component';
import Movie from './components/movies/movie.component';
import Movies from './components/movies/movies.compoment';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <div className="row">
            <h1 className="mt-3">Go Watch a Movie!</h1>
            <hr className="mb-3"></hr>
          </div>

          <div className="row">
            <div className="col-md-2">
              <nav>
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/movies">Movies</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/categories">Categories</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/admin">Admin</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-md-10">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="movies" element={<Movies />}></Route>
                <Route path="movies/:id" element={<Movie />}></Route>
                <Route exact path="categories" element={<Categories />}></Route>
                <Route
                  exact
                  path="categories/comedy"
                  element={<Category title={`Comedy`} />}
                ></Route>
                <Route
                  exact
                  path="categories/drama"
                  element={<Category title={`Drama`} />}
                ></Route>
                <Route path="admin" element={<Admin />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

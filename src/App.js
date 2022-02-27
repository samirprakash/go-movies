import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ManageMovie from './components/admin/manage-movie.component';
import Genre from './components/genres/genre.component';
import Genres from './components/genres/genres.component';
import Home from './components/home/home.component';
import Login from './components/login/login.component';
import Movie from './components/movies/movie.component';
import Movies from './components/movies/movies.component';

function App() {
  const [JWT, setJWT] = useState('');

  const handleJWTChange = (jwt) => {
    setJWT(jwt);
  };

  const logout = () => {
    setJWT('');
  };

  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mt-3">Go Watch a Movie!</h1>
            </div>
            {JWT === '' ? (
              <div className="col mt-4 text-end">
                <Link to="/login">Login</Link>
              </div>
            ) : (
              <div className="col mt-4 text-end">
                <Link to="/logout" onClick={logout}>
                  Logout
                </Link>
              </div>
            )}
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
                    <Link to="/genres">Genres</Link>
                  </li>
                  {JWT === '' ? (
                    <></>
                  ) : (
                    <>
                      <li className="list-group-item">
                        <Link to="/admin/movies/0">Add Movie</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/admin">Admin</Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>

            <div className="col-md-10">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="login"
                  element={<Login handleJWTChange={handleJWTChange} />}
                ></Route>
                <Route
                  path="movies"
                  element={<Movies isAdmin={false} />}
                ></Route>
                <Route
                  path="movies/:id"
                  element={<Movie isAdmin={false} />}
                ></Route>
                <Route exact path="genres" element={<Genres />}></Route>
                <Route exact path="genres/:id" element={<Genre />}></Route>
                <Route path="admin" element={<Movies isAdmin={true} />}></Route>
                <Route
                  exact
                  path="admin/movies/:id"
                  element={<ManageMovie />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './redux/articlesSlice';
import Articles from './components/Articles';
import Programming from './components/Programming';
import Covid from './components/Covid';
import Saved from './components/Saved';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
  const search = useSelector((state) => state.articles.search);
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => dispatch(setSearch('indonesia'))}
              >
                Indonesia
              </Link>
              </li>

              <li>
              <Link
                className="nav-link"
                to="/programming"
                onClick={() => dispatch(setSearch('programming'))}
              >
                Programming
              </Link>
              </li>

              <li className="nav-item">
              <Link
                className="nav-link"
                to="/covid"
                onClick={() => dispatch(setSearch('covid'))}
              >
                Covid-19
              </Link>
              </li>

              <li className="nav-item">
              <Link
                className="nav-link"
                to="/saved"
                onClick={() => dispatch(setSearch('saved'))}
              >
                Saved
              </Link>
              </li>

            </ul>

            <Search />

          </div>
        </nav>

        <div>
        <h1 className="text-center mb-4 mt-4 text-capitalize">{search} News</h1>
        <hr style={{ height: "4px", backgroundColor: "#000", border: "none" }} className="mb-4" />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/programming" element={<Programming />} />
            <Route path="/covid" element={<Covid />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </div>

        <footer>
          <div className="container">
            <small>Copyright &copy; 2024 - Muhammad Sadid Rabbani</small>
          </div>
        </footer>

      </div>
    </Router>
  );
};

export default App;

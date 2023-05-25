import React from 'react';

const Header = () => {
  return (
    <div className="header-container sticky-top  bg-light ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          <img className="image" src="logo.svg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                <b>Oman</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>T Tv</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>World</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Business</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Sports</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Opinion</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Technology</b>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b style={{ display: 'inline-block' }}>T-mag</b>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  T-Mag
                </a>
                <a class="dropdown-item" href="#">
                  Lifestyle
                </a>
                <a class="dropdown-item" href="#">
                  Ramadan
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Roundup</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Business Interviews</b>
              </a>
            </li>
          </ul>
          <div className="search d-flex justify-content-end">
            <i className="fa fa-search" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

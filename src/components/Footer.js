import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="pills-container">
        <div className="pills">
          <img src="fm.png" style={{ height: '50px' }}></img>
        </div>
        <div className="pills">
          <img src="tmag.jpg" style={{ height: '50px' }}></img>
        </div>
        <div className="pills">
          {' '}
          <img src="eshhar.png" style={{ height: '50px' }}></img>
        </div>
      </div>
      <div className="bg-gray-200 border-top foot-container">
        <div className="row-container d-flex justify-content-between align-items-left">
          <div className="row1 ">
            <p>Oman</p>
            <p>Times Tv</p>
            <p>World</p>
            <p>Business</p>
          </div>
          <div className="row2">
            <p>Sports</p>
            <p>Opinion</p>
            <p>Technology</p>
            <p>T Mag</p>
          </div>
          <div className="row3">
            <p>#OmanPride</p>
            <p>Lifestyle</p>
            <p>Roundup</p>
          </div>
          <div className="row4">
            <a className="navbar-brand" href="#">
              <img className="f-image" src="logo.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3  fs-13">
        <div className="link-footer">
          <a href="/about" className="link">
            About Us .
          </a>
          <a href="/advertise" className="link">
            Advertising .
          </a>
          <a href="/contact-us" className="link">
            Contact Us .
          </a>

          <div class="copy fs-12 mt-2 ">
            Copyright 2023 Muscat Media Group. Times of Oman is not responsible
            <br />
            for the content of external internet sites.
            <a href="https://bitwize.ae" target="_blank" className="link2 mr-2">
              Bitwize ™
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

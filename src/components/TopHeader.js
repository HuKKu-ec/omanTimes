import React from 'react';
const TopHeader = () => {
  return (
    <div className="tHeader-container bg-dark color-white d-none d-md-block">
      <div className="flexbox d-flex justify-content-between align-items-center">
        <div className="date  " style={{ color: '#fff' }}>
          <i className="fa fa-calendar-o m-1" />
          Wednesday 24 / May / 2023
        </div>
        <div
          className="social-media d-flex justify-content-between align-items-center"
          style={{ color: '#fff' }}
        >
          <i className="fa fa-facebook m-1" />
          <i className="fa fa-twiter m-1" />
          <i className="fa fa-youtube m-1" />
          <i className="fa fa-whatsapp m-1" />
          <i className="fa fa-instagram m-1" />
          <div
            className="bg-danger p-1 px-4"
            style={{ fontSize: '15px', marginLeft: '10px' }}
          >
            <i className="fa fa-music" style={{ marginRight: '6px' }} />
            RADIO
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

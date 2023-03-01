import React from 'react';
import Nav from 'react-bootstrap/Nav';

const SidebarDesktop = ({ sidebarData }) => {
  return (
    <Nav className="app-leftsidebar d-none vh-100 d-md-block bg-danger position-fixed">
      <div className="flex-column">
        {sidebarData?.map((data, index) => (
          <React.Fragment key={index}>
            <Nav.Link className='text-white' href="#">{data.name}</Nav.Link>
          </React.Fragment>
        ))}
      </div>
    </Nav>
  );
};

export default SidebarDesktop;




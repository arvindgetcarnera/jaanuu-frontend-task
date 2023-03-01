import React from 'react'
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function SidebarMobile({ show, handleClose, sidebarData }) {
  return (
    <Offcanvas className='bg-danger' show={show} onHide={handleClose} placement='end'>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title className='text-white'>Menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav className='flex-column'>
      {sidebarData?.map((data, index) => (
        <React.Fragment key={index}>
          <Nav.Link className='text-white' href="#">{data.name}</Nav.Link>
        </React.Fragment>
      ))}
      </Nav>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

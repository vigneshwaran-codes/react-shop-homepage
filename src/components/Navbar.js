import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'

export default function TopNavbar ({ item }) {
  return (
    <div>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Start Bootstrap</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>About</Nav.Link>
            <NavDropdown title='Shop' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                All Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.2'>
                Popular Item
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant='outline-dark' size='lg'>
              <BsFillCartFill /> Cart {item}
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

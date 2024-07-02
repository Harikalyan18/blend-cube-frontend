// import React, { useState } from 'react';
// import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
// import Select from 'react-select';

//  Options for the select dropdown
// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
//   { value: 'option4', label: 'Option 4' }
// ];

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

//   const handleOptionClick = (value) => {
//     console.log("Selected Option:", value);
//     // Perform any action when an option is clicked
//   };

//   return (
//     <Navbar color="teal" light expand="lg">
//       <Container fluid>
//         <NavbarBrand href="/">
//           <img src="/logo.png" alt="Own Desk Logo" style={{ width: '50px', marginRight: '10px' }} />
//           OWN DESK
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="align-items-center" style={{ width: 'calc(59%)' }}>
//             <Input type="text" placeholder="Search" className="me-1" style={{ flex: 1 }} />
//             <Button outline color="primary">Search</Button>
//           </Nav>
//           <Nav className="ms-auto" navbar>
//             <div className="me-3">
//               <Select options={options} placeholder="Select a city" isSearchable styles={{ width: '200px' }} />
//             </div>
//             <div className="me-3">
//               <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//                 <DropdownToggle caret>
//                   More Options
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem onClick={() => handleOptionClick("Option 1")}>Option 1</DropdownItem>
//                   <DropdownItem onClick={() => handleOptionClick("Option 2")}>Option 2</DropdownItem>
//                   <DropdownItem onClick={() => handleOptionClick("Option 3")}>Option 3</DropdownItem>
//                   <DropdownItem onClick={() => handleOptionClick("Option 4")}>Option 4</DropdownItem>
//                 </DropdownMenu>
//               </ButtonDropdown>
//             </div>
//             <Button color="success">Become a Proprietor</Button>
//           </Nav>
//         </Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


// import { useState } from 'react';
// import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Typeahead } from 'react-bootstrap-typeahead'; // Import Typeahead

// function NavBar() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCity, setSelectedCity] = useState(null); // State to store selected city

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleOptionClick = (option) => {
//     console.log(option); // Handle option click logic here
//     setDropdownOpen(false); // Close dropdown after option click
//   };

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="align-items-center" style={{ width: 'calc(69%)' }}>
//             <Form className="d-flex" style={{ width: '100%', justifyContent: 'space-between' }}>
//               <Form.Control type="text" placeholder="Search" className="me-1" style={{ flex: 2 }} />
//               <Button variant="outline-primary" className="me-3">Search</Button> {/* Added margin */}
//               <div style={{ width: '200px' }}>
//                 <Typeahead
//                   id="selectCity"
//                   labelKey="name"
//                   placeholder="Select a city"
//                   onChange={(selected) => setSelectedCity(selected[0])}
//                   options={[
//                     { name: 'City 1' },
//                     { name: 'City 2' },
//                     { name: 'City 3' },
//                   ]}
//                 />
//               </div>
//             </Form>
//           </Nav>
//           <Nav className="ms-2">
//             <div className="me-2">
//               <NavDropdown title="More Options" id="basic-nav-dropdown" show={dropdownOpen} onSelect={handleOptionClick} onClick={toggleDropdown}>
//                 <NavDropdown.Item eventKey="Option 1">Option 1</NavDropdown.Item>
//                 <NavDropdown.Item eventKey="Option 2">Option 2</NavDropdown.Item>
//                 <NavDropdown.Item eventKey="Option 3">Option 3</NavDropdown.Item>
//                 <NavDropdown.Item eventKey="Option 4">Option 4</NavDropdown.Item>
//               </NavDropdown>
//             </div>
//             <Button variant="success">Become a Proprietor</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setDropdownOpen(false);
  };

  return (
    <Navbar expand="lg" className="bg-purple"> {/* Added bg-purple class */}
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="align-items-center" style={{ width: 'calc(69%)' }}>
            <Form className="d-flex" style={{ width: '100%', justifyContent: 'space-between' }}>
              <Form.Control type="text" placeholder="Search" className="me-1" style={{ flex: 2 }} />
              <Button variant="outline-primary" className="me-3">Search</Button>
              <div style={{ width: '200px' }}>
                <Typeahead
                  id="selectCity"
                  labelKey="name"
                  placeholder="Select a city"
                  onChange={(selected) => setSelectedCity(selected[0])}
                  options={[
                    { name: 'City 1' },
                    { name: 'City 2' },
                    { name: 'City 3' },
                  ]}
                />
              </div>
            </Form>
          </Nav>
          <Nav className="ms-2">
            <div className="me-2">
              <NavDropdown title="More Options" id="basic-nav-dropdown" show={dropdownOpen} onSelect={handleOptionClick} onClick={toggleDropdown}>
                <NavDropdown.Item eventKey="Option 1">Option 1</NavDropdown.Item>
                <NavDropdown.Item eventKey="Option 2">Option 2</NavDropdown.Item>
                <NavDropdown.Item eventKey="Option 3">Option 3</NavDropdown.Item>
                <NavDropdown.Item eventKey="Option 4">Option 4</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Button variant="success">Become a Proprietor</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

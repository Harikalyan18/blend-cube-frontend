
// import React, { useState } from 'react';
// import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
// import Select from 'react-select';

// // Options for the select dropdown
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
//     <Navbar color="light" light expand="lg">
//       <Container fluid>
//         <NavbarBrand href="/">OWN DESK</NavbarBrand>
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


// import React, { useState } from 'react';
// import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
// import Select from 'react-select';

// // Options for the select dropdown
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
//     <Navbar color="light" light expand="lg">
//       <Container fluid>
//         <NavbarBrand href="/">
//           <img src="/path/to/your/logo.png" alt="Logo" height="30" />
//           {' '}{' '}
//           own your desk
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


// import React, { useState } from 'react';
// import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
// import Select from 'react-select';

// // Options for the select dropdown
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
//     <Navbar color="light" light expand="lg">
//       <Container fluid>
//         <NavbarBrand href="/">
//           <img src="/logo.png" alt="Own Desk Logo" style={{ width: '50px', marginRight: '10px' }} />
//           OWN DESK
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="align-items-center" style={{ width: 'calc(54%)' }}>
//             <Input type="text" placeholder="Search" className="me-1" style={{ flex: 1 }} />
//             <Button outline color="primary">Search</Button>
//           </Nav>
//           <Nav className="ms-auto" navbar>
//             <div className="me-3">
//               <Select options={options} placeholder="Search or select city" isSearchable style={{ width: '200%' }} />
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


import React, { useState } from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import Select from 'react-select';

// Options for the select dropdown
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const handleOptionClick = (value) => {
    console.log("Selected Option:", value);
    // Perform any action when an option is clicked
  };

  return (
    <Navbar color="teal" light expand="lg">
      <Container fluid>
        <NavbarBrand href="/">
          <img src="/logo.png" alt="Own Desk Logo" style={{ width: '50px', marginRight: '10px' }} />
          OWN DESK
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="align-items-center" style={{ width: 'calc(59%)' }}>
            <Input type="text" placeholder="Search" className="me-1" style={{ flex: 1 }} />
            <Button outline color="primary">Search</Button>
          </Nav>
          <Nav className="ms-auto" navbar>
            <div className="me-3">
              <Select options={options} placeholder="Select a city" isSearchable styles={{ width: '200px' }} />
            </div>
            <div className="me-3">
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                  More Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => handleOptionClick("Option 1")}>Option 1</DropdownItem>
                  <DropdownItem onClick={() => handleOptionClick("Option 2")}>Option 2</DropdownItem>
                  <DropdownItem onClick={() => handleOptionClick("Option 3")}>Option 3</DropdownItem>
                  <DropdownItem onClick={() => handleOptionClick("Option 4")}>Option 4</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            <Button color="success">Become a Proprietor</Button>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

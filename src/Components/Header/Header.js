
import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, seLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="px-4 text-light" to="/home">Home</Link>
                        <Link className="px-4 text-light" to="/chackout">Orders</Link>
                        <Link className="px-4 text-light" to="/ManageProduct">Admin</Link>
                        <Link className="px-4 text-light" to="/destionation">Deals</Link>
                    </Nav>
                    <Form style={{ marginRight: "70px" }} inline>
                        {
                            loggedInUser.email ?
                                <Dropdown >
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        User
                                     </Dropdown.Toggle>

                                    <Dropdown.Menu className="bg-info p-2  rounded" >
                                        <p><strong> name:</strong>  {loggedInUser.name}</p>
                                        <p><strong> Email:</strong>  {loggedInUser.email}</p>
                                    </Dropdown.Menu>
                                </Dropdown>



                                :

                       <Link to="/login"><Button variant="outline-info">login</Button></Link>

                        }

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
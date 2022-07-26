import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style.css'
import { faRightFromBracket, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    const user=true;

    return (
        <Navbar className='shadow-sm'>
            <Container>
            <Navbar.Brand className='logo' href="/">
                🥦 Broccoli
            </Navbar.Brand>
            <Nav className="ms-auto">

                {!user &&
                <>
                <Nav.Link to="/login">
                    <span className="svg-circle">
                        <FontAwesomeIcon 
                        icon={faRightToBracket}
                        size="xs"/>
                    </span>
                    <span className='show-at-md'>
                        Login
                    </span>
                </Nav.Link>
                
                <Nav.Link href="/register">
                    Register
                </Nav.Link>
                </>
                }
                
                {user && 
                <Nav.Link to="/login">
                    <span className="svg-circle">
                        <FontAwesomeIcon 
                        icon={faRightFromBracket}
                        size="xs"/>
                    </span>
                    <span className='show-at-md'>
                        Logout
                    </span>
                </Nav.Link>
                }

            </Nav>
            </Container>
        </Navbar>
    );
}
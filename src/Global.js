import {Nav, Navbar} from "react-bootstrap";

export function MakeNavBar() {
    return (
        <Navbar expand="sm">
            <Nav className="flex-fill justify-content-center">
                <Nav.Link href="/thevault/"  className="nav-link">/home</Nav.Link>
                <Nav.Link href="/thevault/notes" className="nav-link">/notes</Nav.Link>
            </Nav>
        </Navbar>
    );
}
import {Nav, Navbar} from "react-bootstrap";

export function MakeNavBar() {
    function OnClick() {
    }
    return (
        <Navbar expand="sm">
            <Nav className="flex-fill justify-content-center">
                <Nav.Link href="/" onClick={OnClick} className="nav-link">home</Nav.Link>
                <Nav.Link href="/notes" onClick={OnClick} className="nav-link">notes</Nav.Link>
            </Nav>
        </Navbar>
        // i got a glock in my rari
    );
}
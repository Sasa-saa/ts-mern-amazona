import { Container, Nav, Navbar } from "react-bootstrap"; // Importing Bootstrap components
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">tsAmazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet /> {/* This will render the current route's component */}
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved. Amazona 2025</div>
      </footer>
    </div>
  );
}

export default App;

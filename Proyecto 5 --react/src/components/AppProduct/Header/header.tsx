import { Container, Navbar } from "react-bootstrap"

const Header = () => {
    return (
    <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Carga de productos</Navbar.Brand>
        </Container>
    </Navbar>
)
}

export default Header

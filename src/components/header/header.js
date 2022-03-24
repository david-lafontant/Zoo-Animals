import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMIcrophone } from '@fortawesome/free-solid-svg-icons';
import HeaderCSS from './header.module.css';

function Header() {
  return (
    <Container className={HeaderCSS.background}>
      <Row>
      <FontAwesomeIcon icon="fa-solid fa-microphone" />
      </Row>
      <Row className={HeaderCSS.headerRow}>
        <Col className={HeaderCSS.banner} sm={6} lg={6} />
        <Col sm={6} lg={6}>
          <h1>
            Zoo
          </h1>
          <h2>
            Animals
          </h2>
        </Col>

      </Row>
    </Container>

  );
}

export default Header;

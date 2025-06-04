
// reactstrap components
import { Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer
      className="footer py-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}
    >
      <Row className="justify-content-center m-0">
        <Col xl="12">
          <small>
            © {new Date().getFullYear()}{" "}
            <span className="font-weight-bold text-warning">FreteCheck</span> | Desenvolvido por{" "}
            <a
              className="text-warning font-weight-bold"
              href="https://github.com/vagner-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vagner Ferreira
            </a>
          </small>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

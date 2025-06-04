import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fakeData = [
  { id: 1, title: "Frete São Paulo → Curitiba", description: "Carga até 300kg - R$ 800" },
  { id: 2, title: "Frete Curitiba → Londrina", description: "Carga leve - R$ 500" },
  { id: 3, title: "Frete Rio de Janeiro → Belo Horizonte", description: "Entrega expressa - R$ 1000" },
  { id: 4, title: "Frete Maringá → Cascavel", description: "Frágil - R$ 600" },
];

const Home = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  // Fecha o menu se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`min-vh-100 ${dark ? "bg-dark text-white" : ""}`} style={{ paddingTop: "2rem" }}>
      {/* Top bar com ícones */}
      <div className="d-flex justify-content-end align-items-center px-4 mb-3">
        <Button color="link" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={20} />
        </Button>
        <Button color="link" onClick={toggleTheme}>
          {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </Button>
      </div>

      {/* Menu lateral à direita */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "250px",
            height: "100%",
            backgroundColor: dark ? "#343a40" : "#f8f9fa",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
            padding: "1rem",
            zIndex: 1050,
          }}
        >
          <p><strong>Menu:</strong></p>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li className="mb-2">
              <Button color="link" onClick={() => navigate("/auth/login")}>Ir para Login</Button>
            </li>
            <li className="mb-2">
              <Button color="link">Meus Fretes</Button>
            </li>
            <li className="mb-2">
              <Button color="link">Perfil</Button>
            </li>
            <li>
              <Button color="link">Sair</Button>
            </li>
          </ul>
        </div>
      )}

      {/* Conteúdo principal */}
      <Container>
        <h2 className="mb-4 text-center">Oportunidades de Frete</h2>
        <Row>
          {fakeData.map((item) => (
            <Col lg="12" md="12" key={item.id} className="mb-4">
              <Card className={`shadow ${dark ? "bg-secondary text-white" : ""}`} style={{ padding: "1rem", minHeight: "140px" }}>
                <CardBody>
                  <CardTitle tag="h4" className="fw-bold">{item.title}</CardTitle>
                  <CardText className="mb-3">{item.description}</CardText>
                  <Button color="primary" block>Visualizar</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

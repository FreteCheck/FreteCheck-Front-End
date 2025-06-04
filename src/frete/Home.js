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
import bgImage from "../assets/img/bg-fretecheck.png"; // certifique-se que o caminho esteja correto

const fakeData = [
  { id: 1, title: "Frete São Paulo → Curitiba", description: "Carga até 300kg - R$ 800" },
  { id: 2, title: "Frete Curitiba → Londrina", description: "Carga leve - R$ 500" },
  { id: 3, title: "Frete Rio de Janeiro → Belo Horizonte", description: "Entrega expressa - R$ 1000" },
  { id: 4, title: "Frete Maringá → Cascavel", description: "Frágil - R$ 600" },
];

const Home = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className="min-vh-100 text-white"
      style={{
        paddingTop: "1rem",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Top bar */}
      <div className="d-flex justify-content-between align-items-center px-4 mb-3">
        <Button color="link" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} color="#FFC107" />
        </Button>
        <Button color="link" onClick={toggleTheme}>
          {dark ? <FaSun size={20} color="#FFC107" /> : <FaMoon size={20} color="#FFC107" />}
        </Button>
      </div>

      {/* Menu lateral */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "250px",
            height: "100%",
            backgroundColor: dark ? "#212121" : "#fff8e1",
            boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
            padding: "1rem",
            zIndex: 1050,
          }}
        >
          <p style={{ color: "#FFC107", fontWeight: "bold" }}>Menu:</p>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li className="mb-2"><Button color="link" style={{ color: "#FFC107" }} onClick={() => navigate("/auth/login")}>Ir para Login</Button></li>
            <li className="mb-2"><Button color="link" style={{ color: "#FFC107" }}>Meus Fretes</Button></li>
            <li className="mb-2"><Button color="link" style={{ color: "#FFC107" }}>Perfil</Button></li>
            <li><Button color="link" style={{ color: "#FFC107" }}>Sair</Button></li>
          </ul>
        </div>
      )}

      {/* Logo */}
      <div className="text-center mb-4">
        <img
          src={require("../assets/img/brand/Logo frete Check.png")}
          alt="Logo FreteCheck"
          style={{
            maxHeight: "130px",
            marginTop: "0px",
            filter: "drop-shadow(0px 0px 6px rgba(255, 204, 0, 0.8))"
          }}
        />
      </div>

      {/* Cards */}
      <Container>
        <Row>
          {fakeData.map((item) => (
            <Col lg="12" md="12" key={item.id} className="mb-4">
              <Card
                className="shadow"
                style={{
                  padding: "1rem",
                  minHeight: "140px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(4px)",
                  color: "#000"
                }}
              >
                <CardBody>
                  <CardTitle tag="h4" className="fw-bold">{item.title}</CardTitle>
                  <CardText className="mb-3">{item.description}</CardText>
                  <Button
                    style={{
                      backgroundColor: "#FFC107",
                      color: "#000",
                      fontWeight: "bold",
                      border: "none"
                    }}
                    block
                  >
                    Visualizar
                  </Button>
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

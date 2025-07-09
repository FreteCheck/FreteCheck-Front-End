import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge
} from "reactstrap";
import { FaMoon, FaSun, FaBars, FaStar, FaTruck, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/img/bg-fretecheck.png";

const fakeData = [
  {
    id: 1,
    title: "Frete São Paulo → Curitiba",
    description: "Carga até 300kg - R$ 800",
    image: "https://source.unsplash.com/800x400/?truck",
    rating: 4.5,
    driver: "Carlos Silva",
    status: "Disponível",
    phone: "(11) 98888-1122"
  },
  {
    id: 2,
    title: "Frete Curitiba → Londrina",
    description: "Carga leve - R$ 500",
    image: "https://source.unsplash.com/800x400/?cargo",
    rating: 4.0,
    driver: "Joana Lima",
    status: "Em andamento",
    phone: "(41) 97777-2233"
  },
  {
    id: 3,
    title: "Frete Rio de Janeiro → BH",
    description: "Entrega expressa - R$ 1000",
    image: "https://source.unsplash.com/800x400/?highway",
    rating: 5.0,
    driver: "Rogério Alves",
    status: "Entregue",
    phone: "(21) 96666-3344"
  },
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
        backgroundAttachment: "fixed",
      }}
    >
      <div className="d-flex justify-content-between align-items-center px-4 mb-3">
        <Button color="link" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} color="#FFC107" />
        </Button>
        <Button color="link" onClick={toggleTheme}>
          {dark ? <FaSun size={20} color="#FFC107" /> : <FaMoon size={20} color="#FFC107" />}
        </Button>
      </div>

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
            <li className="mb-2">
              <Button color="link" style={{ color: "#FFC107" }} onClick={() => navigate("/auth/login")}>Login</Button>
            </li>
            <li className="mb-2">
              <Button color="link" style={{ color: "#FFC107" }}>Meus Fretes</Button>
            </li>
            <li className="mb-2">
              <Button color="link" style={{ color: "#FFC107" }}>Perfil</Button>
            </li>
            <li>
              <Button color="link" style={{ color: "#FFC107" }}>Sair</Button>
            </li>
          </ul>
        </div>
      )}

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

      <Container>
        <Row>
          {fakeData.map((item) => (
            <Col lg="8" md="10" className="mx-auto mb-4" key={item.id}>
              <Card
                className="shadow"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  color: "#000"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <CardTitle tag="h4" className="fw-bold mb-0">{item.title}</CardTitle>
                    <Badge color="info">{item.status}</Badge>
                  </div>

                  <CardText>{item.description}</CardText>

                  <CardText className="mb-1">
                    <small className="text-muted">
                      <FaTruck className="me-1" /> Motorista: <strong>{item.driver}</strong>
                    </small>
                  </CardText>

                  <CardText className="mb-2">
                    <small className="text-muted">
                      <FaPhoneAlt className="me-1" /> {item.phone}
                    </small>
                  </CardText>

                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(item.rating) ? "#FFD700" : "#ccc"}
                        size={18}
                      />
                    ))}
                    <span className="ms-2 text-muted">({item.rating})</span>
                  </div>

                  <Button
                    style={{
                      backgroundColor: "#FFC107",
                      color: "#000",
                      fontWeight: "bold",
                      border: "none"
                    }}
                    block
                    onClick={() => navigate(`/admin/frete/${item.id}`)}
                  >
                    Visualizar Detalhes
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
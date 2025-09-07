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
import {
  FaMoon,
  FaSun,
  FaBars,
  FaStar,
  FaTruck,
  FaPhoneAlt,
  FaBox
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/brand/Logo frete Check.png";

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

  const backgroundColor = dark ? "#1d1d1d" : "#FFF7D6";
  const cardColor = dark ? "#2a2a2a" : "#ffffff";

  return (
    <div style={{ minHeight: "100vh", backgroundColor, color: dark ? "#fff" : "#222" }}>
      {/* Header */}
      <header
        className="d-flex justify-content-between align-items-center px-4 py-3 shadow"
        style={{ backgroundColor, position: "sticky", top: 0, zIndex: 100 }}
      >
        <Button color="link" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} color="#FFC107" />
        </Button>
        <img src={logo} alt="Logo FreteCheck" style={{ height: "42px" }} />
        <Button color="link" onClick={toggleTheme}>
          {dark ? <FaSun size={20} color="#FFC107" /> : <FaMoon size={20} color="#FFC107" />}
        </Button>
      </header>

      {/* Menu Lateral */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "260px",
            height: "100vh",
            backgroundColor: dark ? "#2a2a2a" : "#fff",
            boxShadow: "4px 0 10px rgba(0,0,0,0.2)",
            padding: "1.5rem",
            zIndex: 2000
          }}
        >
          <h5 style={{ color: "#FFC107" }}>Menu</h5>
          <ul className="list-unstyled mt-4">
            <li><Button color="link" onClick={() => navigate("/auth/login")} style={{ color: "#FFC107" }}>Login</Button></li>
            <li><Button color="link" style={{ color: "#FFC107" }}>Meus Fretes</Button></li>
            <li><Button color="link" style={{ color: "#FFC107" }}>Perfil</Button></li>
            <li><Button color="link" style={{ color: "#FFC107" }}>Sair</Button></li>
          </ul>
        </div>
      )}

      {/* Conteúdo */}
      <Container className="mt-5">
        <Row>
          {fakeData.map((item) => (
            <Col key={item.id} md="8" className="mx-auto mb-5">
              <Card
                style={{
                  borderRadius: "20px",
                  backgroundColor: cardColor,
                  color: dark ? "#fff" : "#222",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
                  transition: "0.3s all"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <CardTitle tag="h5" className="fw-bold">
                      {item.title}
                    </CardTitle>
                    <Badge
                      color={item.status === "Disponível" ? "success" : item.status === "Entregue" ? "secondary" : "warning"}
                      className="px-3 py-1 text-uppercase"
                    >
                      {item.status}
                    </Badge>
                  </div>

                  <CardText className="mb-2 d-flex align-items-center">
                    <FaBox className="me-2 text-danger" /> {item.description}
                  </CardText>
                  <CardText className="mb-1 text-muted d-flex align-items-center">
                    <FaTruck className="me-2 text-danger" /> Motorista: {item.driver}
                  </CardText>
                  <CardText className="mb-3 text-muted d-flex align-items-center">
                    <FaPhoneAlt className="me-2 text-danger" /> {item.phone}
                  </CardText>

                  <div className="d-flex align-items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(item.rating) ? "#FFD700" : "#ccc"}
                        size={18}
                      />
                    ))}
                    <span className="ms-2 text-muted">({item.rating.toFixed(1)})</span>
                  </div>

                  <Button
                    onClick={() => navigate(`/admin/frete/${item.id}`)}
                    style={{
                      background: "linear-gradient(to right, #FFC107, #FF9800)",
                      color: "#000",
                      fontWeight: 600,
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "10px",
                      border: "none"
                    }}
                  >
                    Visualizar Detalhes
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="text-center mt-5 pb-3" style={{ opacity: 0.75, fontSize: "0.9rem" }}>
        <p>&copy; 2025 FreteCheck • Soluções inteligentes para transporte de cargas</p>
      </footer>
    </div>
  );
};

export default Home;

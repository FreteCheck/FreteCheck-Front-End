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
      className={`min-vh-100 d-flex flex-column`}
      style={{
        // Fundo com gradiente suave e imagem com overlay para não competir
        backgroundImage: `linear-gradient(rgba(255, 207, 54, 0.6), rgba(255, 191, 0, 0.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        paddingTop: "1rem",
        color: dark ? "#fff" : "#222",
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      {/* Barra superior com botões */}
      <div className="d-flex justify-content-between align-items-center px-4 mb-4">
        <Button
          color="link"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          style={{ color: "#FFC107" }}
        >
          <FaBars size={28} />
        </Button>
        <Button
          color="link"
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
          style={{ color: "#FFC107" }}
        >
          {dark ? <FaSun size={24} /> : <FaMoon size={24} />}
        </Button>
      </div>

      {/* Menu lateral */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "280px",
            height: "100vh",
            backgroundColor: dark ? "#212121" : "#fff8e1",
            boxShadow: "4px 0 10px rgba(0,0,0,0.3)",
            padding: "1.5rem",
            zIndex: 1100,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h5 style={{ color: "#FFC107", fontWeight: "700", marginBottom: "1rem" }}>
            Menu
          </h5>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            <li>
              <Button
                color="link"
                style={{ color: "#FFC107", fontWeight: "600" }}
                onClick={() => navigate("/auth/login")}
              >
                Login
              </Button>
            </li>
            <li>
              <Button color="link" style={{ color: "#FFC107", fontWeight: "600" }}>
                Meus Fretes
              </Button>
            </li>
            <li>
              <Button color="link" style={{ color: "#FFC107", fontWeight: "600" }}>
                Perfil
              </Button>
            </li>
            <li>
              <Button color="link" style={{ color: "#FFC107", fontWeight: "600" }}>
                Sair
              </Button>
            </li>
          </ul>
        </div>
      )}

      {/* Logo centralizado */}
      <div className="text-center mb-5">
        <img
          src={require("../assets/img/brand/Logo frete Check.png")}
          alt="Logo FreteCheck"
          style={{
            maxHeight: "130px",
            filter: "drop-shadow(0 0 8px rgba(255, 204, 0, 0.9))",
            transition: "transform 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Conteúdo principal - cards de fretes */}
      <Container>
        <Row>
          {fakeData.map((item) => (
            <Col
              lg="8"
              md="10"
              className="mx-auto mb-5"
              key={item.id}
              style={{ cursor: "default" }}
            >
              <Card
                className="shadow"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: dark ? "#2b2b2b" : "rgba(255, 255, 255, 0.97)",
                  color: dark ? "#fff" : "#222",
                  boxShadow: dark
                    ? "0 8px 16px rgba(255, 193, 7, 0.4)"
                    : "0 8px 24px rgba(255, 193, 7, 0.3)",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  userSelect: "none",
                  // Pequeno efeito hover mais claro e elevação
                  cursor: "pointer",
                  transformOrigin: "center",
                  transitionProperty: "background-color, box-shadow, transform",
                  transitionDuration: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = dark ? "#3c3c3c" : "#fffbee";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(255, 193, 7, 0.7)";
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = dark ? "#2b2b2b" : "rgba(255, 255, 255, 0.97)";
                  e.currentTarget.style.boxShadow = dark
                    ? "0 8px 16px rgba(255, 193, 7, 0.4)"
                    : "0 8px 24px rgba(255, 193, 7, 0.3)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  loading="lazy"
                />
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <CardTitle
                      tag="h4"
                      className="fw-bold mb-0"
                      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
                    >
                      {item.title}
                    </CardTitle>
                    <Badge
                      color={item.status === "Disponível" ? "success" : item.status === "Entregue" ? "secondary" : "warning"}
                      style={{
                        fontWeight: "600",
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        padding: "0.4em 0.8em",
                        borderRadius: "12px"
                      }}
                    >
                      {item.status}
                    </Badge>
                  </div>

                  <CardText
                    style={{ fontSize: "1.05rem", marginBottom: "1rem", fontWeight: "500" }}
                  >
                    {item.description}
                  </CardText>

                  <CardText className="mb-1 d-flex align-items-center text-muted" style={{ gap: "0.5rem" }}>
                    <FaTruck size={18} color="#FFC107" />
                    Motorista: <strong>{item.driver}</strong>
                  </CardText>

                  <CardText className="mb-3 d-flex align-items-center text-muted" style={{ gap: "0.5rem" }}>
                    <FaPhoneAlt size={18} color="#FFC107" />
                    {item.phone}
                  </CardText>

                  <div className="mb-3 d-flex align-items-center" style={{ gap: "0.25rem" }}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(item.rating) ? "#FFD700" : "#ddd"}
                        size={20}
                        style={{ filter: i < item.rating && i + 0.5 > item.rating ? "grayscale(50%)" : "none" }}
                      />
                    ))}
                    <span className="ms-2 text-muted" style={{ fontWeight: "600" }}>
                      ({item.rating.toFixed(1)})
                    </span>
                  </div>

                  <Button
                    style={{
                      backgroundImage: "linear-gradient(90deg, #FFC107 0%, #FFB300 100%)",
                      color: "#000",
                      fontWeight: "700",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.75rem",
                      fontSize: "1rem",
                      width: "100%",
                      transition: "background-position 0.3s ease",
                      backgroundSize: "200% 100%",
                      backgroundPosition: "0% 0%"
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundPosition = "100% 0")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundPosition = "0% 0")}
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

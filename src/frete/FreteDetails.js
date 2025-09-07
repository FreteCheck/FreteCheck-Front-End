// src/pages/FreteDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import logo from "../assets/img/brand/Logo frete Check.png";

const fakeData = [
  {
    id: 1,
    title: "Frete São Paulo → Curitiba",
    description: "Carga até 300kg - R$ 800",
    image: "https://source.unsplash.com/800x400/?truck",
    driver: "Carlos Silva",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Frete Curitiba → Londrina",
    description: "Carga leve - R$ 500",
    image: "https://source.unsplash.com/800x400/?cargo",
    driver: "Joana Lima",
    rating: 4.0,
  },
  {
    id: 3,
    title: "Frete Rio de Janeiro → Belo Horizonte",
    description: "Entrega expressa - R$ 1000",
    image: "https://source.unsplash.com/800x400/?highway",
    driver: "Rogério Alves",
    rating: 5.0,
  },
];

const FreteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const frete = fakeData.find((f) => f.id === Number(id));

  if (!frete) {
    return (
      <Container className="mt-5 text-center">
        <h3 className="mb-4">🚫 Frete não encontrado</h3>
        <Button color="warning" onClick={() => navigate(-1)}>
          <FaArrowLeft className="me-2" /> Voltar
        </Button>
      </Container>
    );
  }

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        backgroundColor: "#FFF7D6",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      {/* Logo no topo */}
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="Logo FreteCheck"
          style={{
            maxHeight: "90px",
            filter: "drop-shadow(0 0 6px rgba(255, 204, 0, 0.8))",
          }}
        />
      </div>

      {/* Detalhes do frete */}
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <Card
              className="shadow-lg"
              style={{
                borderRadius: "20px",
                backgroundColor: "#fff",
                overflow: "hidden",
              }}
            >
              <img
                src={frete.image}
                alt="Imagem do frete"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <CardBody className="p-4">
                <CardTitle
                  tag="h3"
                  className="fw-bold mb-4 text-center"
                  style={{ fontFamily: "'Segoe UI', sans-serif" }}
                >
                  {frete.title}
                </CardTitle>

                <CardText className="mb-3">
                  <strong>Descrição:</strong> {frete.description}
                </CardText>

                <CardText className="mb-3">
                  <strong>Motorista:</strong> {frete.driver}
                </CardText>

                <div className="mb-4 d-flex align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={22}
                      color={i < Math.floor(frete.rating) ? "#FFD700" : "#ddd"}
                      style={{
                        transition: "transform 0.2s",
                        transform: i < frete.rating && i + 0.5 > frete.rating ? "scale(0.95)" : "scale(1)",
                      }}
                    />
                  ))}
                  <span className="ms-2 text-muted fw-bold">
                    ({frete.rating.toFixed(1)})
                  </span>
                </div>

                <div className="text-center">
                  <Button
                    style={{
                      backgroundImage: "linear-gradient(to right, #FFC107, #FFB300)",
                      color: "#000",
                      fontWeight: "600",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.75rem 1.5rem",
                      fontSize: "1rem",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => navigate(-1)}
                  >
                    <FaArrowLeft className="me-2" />
                    Voltar
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FreteDetail;

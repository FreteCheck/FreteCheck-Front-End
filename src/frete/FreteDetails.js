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
import bgImage from "../assets/img/bg-fretecheck.png";

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
      <Container className="mt-5">
        <h3>Frete não encontrado</h3>
        <Button color="primary" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Voltar
        </Button>
      </Container>
    );
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <Card
              className="shadow-lg"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <img
                src={frete.image}
                alt="Imagem do frete"
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <CardBody>
                <CardTitle tag="h3" className="fw-bold mb-3">
                  {frete.title}
                </CardTitle>

                <CardText className="mb-2">
                  <strong>Descrição:</strong> {frete.description}
                </CardText>

                <CardText>
                  <strong>Motorista:</strong> {frete.driver}
                </CardText>

                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < Math.floor(frete.rating) ? "#FFD700" : "#ccc"}
                      size={20}
                    />
                  ))}
                  <span className="ms-2 text-muted">({frete.rating})</span>
                </div>

                <Button
                  color="warning"
                  className="fw-bold text-dark"
                  onClick={() => navigate(-1)}
                >
                  <FaArrowLeft className="me-2" />
                  Voltar
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FreteDetail;

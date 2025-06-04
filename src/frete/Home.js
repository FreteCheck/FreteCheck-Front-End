// src/frete/Home.js (ou onde estiver localizado)
import React from "react";
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

const fakeData = [
  { id: 1, title: "Frete São Paulo → Curitiba", description: "Carga até 300kg - R$ 800" },
  { id: 2, title: "Frete Curitiba → Londrina", description: "Carga leve - R$ 500" },
  { id: 3, title: "Frete Rio de Janeiro → Belo Horizonte", description: "Entrega expressa - R$ 1000" },
  { id: 4, title: "Frete Maringá → Cascavel", description: "Frágil - R$ 600" },
];

const Home = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Oportunidades de Frete</h2>
      <Row>
        {fakeData.map((item) => (
          <Col lg="12" md="12" key={item.id} className="mb-4">
            <Card className="shadow" style={{ padding: "1rem", minHeight: "140px" }}>
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
  );
};

export default Home;

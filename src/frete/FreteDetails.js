// src/pages/FreteDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "reactstrap";

const fakeData = [
  { id: 1, title: "Frete São Paulo → Curitiba", description: "Carga até 300kg - R$ 800" },
  { id: 2, title: "Frete Curitiba → Londrina", description: "Carga leve - R$ 500" },
  { id: 3, title: "Frete Rio de Janeiro → Belo Horizonte", description: "Entrega expressa - R$ 1000" },
  { id: 4, title: "Frete Maringá → Cascavel", description: "Frágil - R$ 600" },
];

const FreteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar o frete pelo id da URL (convertendo id para número)
  const frete = fakeData.find(f => f.id === Number(id));

  if (!frete) {
    return (
      <Container className="mt-5">
        <h3>Frete não encontrado</h3>
        <Button color="primary" onClick={() => navigate(-1)}>Voltar</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>{frete.title}</h2>
      <p>{frete.description}</p>
      {/* Aqui você pode adicionar mais detalhes reais */}
      <Button color="primary" onClick={() => navigate(-1)}>Voltar</Button>
    </Container>
  );
};

export default FreteDetail;

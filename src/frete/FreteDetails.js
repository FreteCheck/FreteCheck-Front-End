import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "reactstrap";

const FreteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2>Detalhes do Frete #{id}</h2>
      <p>Aqui você poderá buscar os dados reais do frete {id} no DynamoDB futuramente.</p>
      <Button color="secondary" onClick={() => navigate("/")}>Voltar</Button>
    </Container>
  );
};

export default FreteDetails;

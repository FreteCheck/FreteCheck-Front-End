import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/brand/Logo frete Check.png";

const Register = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/auth/login");
      } else {
        const erro = await response.text();
        alert("Erro ao cadastrar: " + erro);
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#FFF7D6",
        padding: "2rem",
      }}
    >
      <Col lg="6" md="8">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Logo FreteCheck"
            style={{
              maxHeight: "90px",
              filter: "drop-shadow(0px 0px 5px rgba(255, 204, 0, 0.9))",
            }}
          />
        </div>

        {/* Card de Registro */}
        <Card
          className="shadow-lg border-0"
          style={{
            borderRadius: "16px",
            backgroundColor: "#fff",
          }}
        >
          <CardHeader className="bg-transparent pb-3 text-center">
            <h4 className="text-warning fw-bold">Criar nova conta</h4>
            <small className="text-muted">
              Preencha os dados para se registrar
            </small>
          </CardHeader>

          <CardBody className="px-lg-5 py-lg-4">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{ backgroundColor: "#FFF8E1" }}>
                      <i className="ni ni-hat-3 text-warning" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="mb-3">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{ backgroundColor: "#FFF8E1" }}>
                      <i className="ni ni-email-83 text-warning" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText style={{ backgroundColor: "#FFF8E1" }}>
                      <i className="ni ni-lock-circle-open text-warning" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label text-muted"
                      htmlFor="customCheckRegister"
                    >
                      Concordo com a{" "}
                      <a href="#!" onClick={(e) => e.preventDefault()} className="text-warning">
                        Política de Privacidade
                      </a>
                    </label>
                  </div>
                </Col>
              </Row>

              <div className="text-center">
                <Button
                  type="button"
                  onClick={handleRegister}
                  style={{
                    backgroundImage: "linear-gradient(to right, #FFC107, #FFB300)",
                    color: "#000",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "10px",
                    padding: "0.75rem 1.5rem",
                    width: "100%",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Criar Conta
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        {/* Link para login */}
        <Row className="mt-3">
          <Col className="text-center">
            <span
              className="text-warning"
              style={{ cursor: "pointer", fontWeight: "500" }}
              onClick={() => navigate("/auth/login")}
            >
              <small>Já tem uma conta? Entrar</small>
            </span>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Register;

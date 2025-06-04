import React from "react";
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

import bgImage from "../../assets/img/bg-fretecheck.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "2rem",
      }}
    >
      <Col lg="5" md="8">
        {/* Logo */}
        <div className="text-center mb-3">
          <img
            src={require("../../assets/img/brand/Logo frete Check.png")}
            alt="Logo FreteCheck"
            style={{
              maxHeight: "100px",
              filter: "drop-shadow(0px 0px 6px rgba(255, 204, 0, 0.9))",
            }}
          />
        </div>

        {/* Botão Voltar para Início */}
        <div className="text-center mb-4">
          <Button
            outline
            color="warning"
            size="sm"
            onClick={() => navigate("/admin/index")}
          >
            ← Voltar para Início
          </Button>
        </div>

        {/* Card de Login */}
        <Card
          className="shadow border-0"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
          }}
        >
          <CardHeader className="bg-transparent pb-4 text-center">
            <h4 style={{ color: "#FFC107" }}>Bem-vindo de volta</h4>
            <small className="text-white">Entre com suas credenciais</small>
          </CardHeader>

          <CardBody className="px-lg-5 py-lg-4">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83 text-warning" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" autoComplete="new-email" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open text-warning" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Senha" type="password" autoComplete="new-password" />
                </InputGroup>
              </FormGroup>

              <div className="custom-control custom-checkbox mb-3">
                <input className="custom-control-input" id="customCheckLogin" type="checkbox" />
                <label className="custom-control-label" htmlFor="customCheckLogin">
                  <span className="text-muted">Lembrar-me</span>
                </label>
              </div>

              <div className="text-center">
                <Button
                  style={{
                    backgroundColor: "#FFC107",
                    color: "#000",
                    fontWeight: "bold",
                    border: "none",
                  }}
                  className="my-3"
                  type="button"
                >
                  Entrar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        {/* Links extras */}
        <Row className="mt-3">
          <Col xs="6">
            <span
              className="text-warning"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Recuperação de senha em breve...")}
            >
              <small>Esqueceu a senha?</small>
            </span>
          </Col>
          <Col className="text-right" xs="6">
            <span
              className="text-warning"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/auth/register")}
            >
              <small>Criar nova conta</small>
            </span>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Login;

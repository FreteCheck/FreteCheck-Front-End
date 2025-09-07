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
import logo from "../../assets/img/brand/Logo frete Check.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#FFF7D6",
        padding: "2rem",
      }}
    >
      <Col lg="5" md="8">
        {/* Logo */}
        <div className="text-center mb-3">
          <img
            src={logo}
            alt="Logo FreteCheck"
            style={{
              maxHeight: "80px",
              filter: "drop-shadow(0px 0px 5px rgba(255, 204, 0, 0.8))",
            }}
          />
        </div>

        {/* Botão Voltar */}
        <div className="text-center mb-4">
          <Button
            color="link"
            size="sm"
            style={{ color: "#FF9800", fontWeight: "bold" }}
            onClick={() => navigate("/admin/index")}
          >
            ← Voltar para Início
          </Button>
        </div>

        {/* Card de Login */}
        <Card
          className="shadow-lg border-0"
          style={{
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.97)",
          }}
        >
          <CardHeader className="pb-3 text-center" style={{ backgroundColor: "transparent" }}>
            <h4 style={{ color: "#FFA000", fontWeight: "bold" }}>Bem-vindo de volta</h4>
            <small className="text-muted">Acesse sua conta para continuar</small>
          </CardHeader>

          <CardBody className="px-lg-5 py-lg-4">
            <Form role="form">
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
                    autoComplete="new-email"
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
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>

              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label text-muted"
                  htmlFor="customCheckLogin"
                >
                  Lembrar-me
                </label>
              </div>

              <div className="text-center">
                <Button
                  style={{
                    backgroundImage: "linear-gradient(to right, #FFC107, #FFB300)",
                    color: "#000",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem 1.5rem",
                    width: "100%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  type="submit"
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
              style={{ cursor: "pointer", fontWeight: "500" }}
              onClick={() => alert("Função de recuperação em breve")}
            >
              <small>Esqueceu a senha?</small>
            </span>
          </Col>
          <Col className="text-end" xs="6">
            <span
              className="text-warning"
              style={{ cursor: "pointer", fontWeight: "500" }}
              onClick={() => navigate("/auth/register")}
            >
              <small>Criar conta</small>
            </span>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Login;

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

const Register = () => {
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
      <Col lg="6" md="8">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src={require("../../assets/img/brand/Logo frete Check.png")}
            alt="Logo FreteCheck"
            style={{
              maxHeight: "100px",
              filter: "drop-shadow(0px 0px 6px rgba(255, 204, 0, 0.9))",
            }}
          />
        </div>

        {/* Card */}
        <Card
          className="shadow border-0"
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            color: "#fff",
          }}
        >
          <CardHeader className="bg-transparent pb-4 text-center">
            <h4 style={{ color: "#FFC107" }}>Criar nova conta</h4>
            <small className="text-white">
              Preencha os dados para se registrar
            </small>
          </CardHeader>

          <CardBody className="px-lg-5 py-lg-4">
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3 text-warning" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Nome" type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
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
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
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

              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Concordo com a{" "}
                        <a href="#!" onClick={(e) => e.preventDefault()} className="text-warning">
                          Política de Privacidade
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>

              <div className="text-center">
                <Button
                  className="mt-3"
                  style={{
                    backgroundColor: "#FFC107",
                    color: "#000",
                    fontWeight: "bold",
                    border: "none",
                  }}
                  type="button"
                >
                  Criar conta
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>

        <Row className="mt-3">
          <Col className="text-center">
            <span
              className="text-warning"
              style={{ cursor: "pointer" }}
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

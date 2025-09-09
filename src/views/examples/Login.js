import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const logoUrl = "http://localhost:3000/argon-dashboard-react/static/media/Logo%20frete%20Check.eb065ab4f433bd791e3b.png";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(""); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Por favor, preencha o email e a senha.");
      return;
    }

    try {
      
      // quando eu vagner terminar colocar la URL do seu servidor (ex: "https://api.fretecheck.com.br/api/usuarios/login").
      const response = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        console.log("Login realizado com sucesso!");
        navigate("/admin/index");
      } else {
        const erroData = await response.json();
        setErro(erroData.message || "Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      setErro("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
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
      <div className="col-lg-5 col-md-8">
        <div className="text-center mb-3">
          <img
            src={logoUrl}
            alt="Logo FreteCheck"
            style={{
              maxHeight: "80px",
              filter: "drop-shadow(0px 0px 5px rgba(255, 204, 0, 0.8))",
            }}
          />
        </div>

        <div className="text-center mb-4">
          <button
            className="btn btn-link"
            style={{ color: "#FF9800", fontWeight: "bold", textDecoration: 'none' }}
            onClick={() => navigate("/admin/index")}
          >
            ← Voltar para Início
          </button>
        </div>

        <div
          className="card shadow-lg border-0"
          style={{
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.97)",
          }}
        >
          <div className="card-header pb-3 text-center" style={{ backgroundColor: "transparent", borderBottom: 'none' }}>
            <h4 style={{ color: "#FFA000", fontWeight: "bold" }}>Bem-vindo de volta</h4>
            <small className="text-muted">Acesse sua conta para continuar</small>
          </div>

          <div className="card-body px-lg-5 py-lg-4">
            {erro && (
              <div className="alert alert-danger text-center fw-bold shadow-sm" role="alert">
                {erro}
              </div>
            )}

            <form role="form" onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <div className="input-group">
                  <span className="input-group-text" style={{ backgroundColor: "#FFF8E1" }}>
                    <i className="ni ni-email-83 text-warning" />
                  </span>
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                 <div className="input-group">
                    <span className="input-group-text" style={{ backgroundColor: "#FFF8E1" }}>
                      <i className="ni ni-lock-circle-open text-warning" />
                    </span>
                    <input
                      placeholder="Senha"
                      type="password"
                      className="form-control"
                      autoComplete="current-password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                 </div>
              </div>

              <div className="custom-control custom-checkbox my-3">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label text-muted"
                  htmlFor="customCheckLogin"
                >
                  <span className="ms-2">Lembrar-me</span>
                </label>
              </div>

              <div className="text-center">
                <button
                  className="btn"
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
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6">
            <span
              className="text-warning"
              style={{ cursor: "pointer", fontWeight: "500" }}
              onClick={() => alert("Função de recuperação em breve")}
            >
              <small>Esqueceu a senha?</small>
            </span>
          </div>
          <div className="col-6 text-end">
            <span
              className="text-warning"
              style={{ cursor: "pointer", fontWeight: "500" }}
              onClick={() => navigate("/auth/register")}
            >
              <small>Criar conta</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


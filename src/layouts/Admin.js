import React, { useEffect, useRef } from "react";
import { useLocation, Route, Routes, Navigate, useParams } from "react-router-dom";
import { Container } from "reactstrap";

// Componentes principais
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// Rotas do admin
import routes from "routes.js";

// Componente extra (caso esteja fora da lista de rotas)
import FreteDetails from "frete/FreteDetails";

const Admin = (props) => {
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainContent.current) mainContent.current.scrollTop = 0;
  }, [location]);

  // Função para mapear rotas com layout /admin
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.path}
            element={React.createElement(prop.component)}
            key={key}
          />
        );
      }
      return null;
    });
  };

  // Define o texto da navbar baseado na rota
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "FreteCheck";
  };

  // Ocultar layout completo em certas páginas (ex: detalhes do frete)
  const hideLayout = location.pathname.startsWith("/admin/frete/");

  return (
    <>
      {!hideLayout && (
        <Sidebar
          {...props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/Logo frete Check.png"),
            imgAlt: "Logo",
          }}
        />
      )}
      <div className="main-content" ref={mainContent}>
        {!hideLayout && (
          <AdminNavbar brandText={getBrandText(location.pathname)} />
        )}

        <Routes>
          {/* Rotas padrão do admin */}
          {getRoutes(routes)}

          {/* Rota extra para detalhes do frete */}
          <Route path="/frete/:id" element={<FreteDetails />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>

        <Container fluid>{!hideLayout && <AdminFooter />}</Container>
      </div>
    </>
  );
};

export default Admin;

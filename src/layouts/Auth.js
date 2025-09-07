import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import routes from "routes.js";

const Auth = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    // Remove qualquer fundo padrão azul do Argon
    document.body.classList.remove("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainContent.current) mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={prop.path} element={<prop.component />} key={key} />
        );
      }
      return null;
    });
  };

  return (
    <div className="main-content" ref={mainContent}>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </div>
  );
};

export default Auth;

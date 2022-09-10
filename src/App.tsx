import * as React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./router/index";

function RouterApp() {
  const routerApp = useRoutes(routes);
  return routerApp;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
};

export default App;

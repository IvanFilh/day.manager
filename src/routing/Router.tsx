import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/backoffice";
import { Login } from "../pages/external";

import ExternalTemplate from "../shared/layout/ExternalTemplate";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ExternalTemplate>
              <Login />
            </ExternalTemplate>
          }
        />
        <Route
          path="/login"
          element={
            <ExternalTemplate>
              <Login />
            </ExternalTemplate>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ExternalTemplate>
              <Dashboard />
            </ExternalTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

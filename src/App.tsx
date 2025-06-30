import React, {JSX} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProgressOverview from "./pages/ProgressOverview";
import DetailsPage from "./pages/DetailsPage";

export default function App(): JSX.Element {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path={"/progressOverview/:taskId"} element={<ProgressOverview/>} />
          <Route path={"/details/:taskId"} element={<DetailsPage/>} />
        </Routes>
      </BrowserRouter>
  );
}
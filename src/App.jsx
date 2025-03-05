import { Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import CreateProject from "./pages/CreateProject/CreateProject";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

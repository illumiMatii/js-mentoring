import { Routes, Route } from "react-router-dom";
import LoginForm from "../src/components/LoginForm";
import RegisterForm from "../src/components/RegisterForm";

const Routes = () => {
    <Routes>
      <Route
        exact
        path="/"
        element={<RegisterForm />}
      />
      <Route path="/signup" element={<RegisterForm />} />
      <Route
        path="/signin"
        element={<LoginForm />}
      />
      </Routes>
}

export default Routes;
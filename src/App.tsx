import Login from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/"
                element={<Login />}
            />
            <Route path="/register"
                element={<Register />}
            />
            <Route path="/forgot-password"
                element={<ForgotPassword />}
            />

        </Routes>
    )
}

export default App;
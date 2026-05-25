// LoginForm.tsx

import { AuthTitle } from "../components/auth/ui/AuthTitle";
import { AuthInput } from "../components/auth/ui/AuthInput";
import { AuthButton } from "../components/auth/ui/AuthButton";
import { Lock, Mail, UserRound } from "lucide-react";
import GoogleIcon from "../assets/icons/logo-google.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/Api/api";
import { LoadingScreen } from "../components/ui/LoadingScreen";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setErrorState(false);
      setSuccess(false);
      setMessage("Iniciando sesión...");

      const response = await api.post("auth/login/", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.access);

      setLoading(false);
      setSuccess(true);
      setMessage("Inicio de sesión correcto");

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.error(error);

      setLoading(false);
      setErrorState(true);
      setMessage("Error al iniciar sesión");

      setTimeout(() => {
        setErrorState(false);
      }, 2500);
    }
  };

  return (
    <>
      <LoadingScreen
        loading={loading}
        success={success}
        error={errorState}
        message={message}
      />

      <div
        className="
          w-full
          max-w-105
          mx-auto

          flex
          flex-col
        "
      >
        {/* Avatar */}
        <div className="flex justify-center">
          <div
            className="
              w-15
              h-15
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <UserRound className="text-blue-600 w-9 h-9" />
          </div>
        </div>

        {/* Title */}
        <AuthTitle title="Bienvenido" desc="Inicia sesión para continuar" />

        {/* Inputs */}
        <div className="flex flex-col">
          <AuthInput
            text="Correo Electrónico"
            type="email"
            placeholder="ejemplo123@gmail.com"
            icon={<Mail size={20} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthInput
            text="Contraseña"
            type="password"
            placeholder="••••••••"
            icon={<Lock size={20} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
            <input
              type="checkbox"
              className="
                rounded
                border-gray-300
                text-blue-600
                focus:ring-blue-500
              "
            />
            Recordarme
          </label>

          <button
            onClick={() => navigate("/forgot-password")}
            className="
              text-blue-600
              hover:text-blue-700
              hover:underline
              transition
              bg-transparent
              border-none
              p-0
              cursor-pointer
            "
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-1">
          <AuthButton
            name={loading ? "Cargando..." : "Iniciar Sesión"}
            color="bg-blue-600"
            hover="hover:bg-blue-700"
            textColor="text-white"
            onClick={handleLogin}
          />

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-px bg-gray-200" />

            <span className="relative bg-[#f8f8f8] px-2 text-sm text-gray-400">
              o
            </span>
          </div>

          <AuthButton
            name="Continuar con Google"
            hover="hover:bg-gray-100"
            textColor="text-black"
            icon={<img src={GoogleIcon} alt="Google" className="w-5 h-5" />}
          />
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          ¿No tienes una cuenta?{" "}
          <span
            onClick={() => navigate("/register")}
            className="
              text-blue-600
              font-semibold
              cursor-pointer
              hover:underline
            "
          >
            Regístrate aquí
          </span>
        </p>
      </div>
    </>
  );
};

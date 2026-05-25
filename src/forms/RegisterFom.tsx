import { AuthTitle } from "../components/auth/ui/AuthTitle";
import { AuthInput } from "../components/auth/ui/AuthInput";
import { AuthButton } from "../components/auth/ui/AuthButton";

import { CarFront, Lock, Mail, Phone, UserRound } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/Api/api";
import { LoadingScreen } from "../components/ui/LoadingScreen";

export const RegisterFom = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [placa, setPlaca] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setSuccess(false);
    setError(false);
    setMessage("Registrando usuario...");

    try {
      await api.post("auth/register/", {
        email,
        nombre,
        apellido,
        telefono,
        password,
        password2,
        placa,
        tipo_vehiculo: tipoVehiculo,
      });

      setLoading(false);
      setSuccess(true);
      setMessage("Usuario registrado correctamente");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err: any) {
      console.error(err.response?.data || err);

      setLoading(false);
      setError(true);
      setMessage("Error al registrar");

      setTimeout(() => {
        setError(false);
        setMessage("");
      }, 1800);
    }
  };

  return (
    <>
      <LoadingScreen
        loading={loading}
        success={success}
        error={error}
        message={message}
      />

      <div className="scale-[0.90] origin-top w-full max-w-3xl mx-auto">
        <AuthTitle title="Registro" desc="Crea tu cuenta para comenzar" />

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <AuthInput
              text="Nombre"
              type="text"
              placeholder="Pascual"
              icon={<UserRound size={16} />}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <AuthInput
              text="Apellidos"
              type="text"
              placeholder="Bravo"
              icon={<UserRound size={16} />}
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>

        <AuthInput
          text="Correo electrónico"
          type="email"
          placeholder="ejemplo@correo.com"
          icon={<Mail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          text="Teléfono"
          type="text"
          placeholder="12345678"
          icon={<Phone size={16} />}
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <AuthInput
            text="Contraseña"
            type="password"
            placeholder="*****"
            icon={<Lock size={16} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <AuthInput
            text="Repetir contraseña"
            type="password"
            placeholder="*****"
            icon={<Lock size={16} />}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <AuthInput
              text="Placa"
              type="text"
              placeholder="XXX-XXX"
              icon={<CarFront size={16} />}
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-sm mb-2 font-semibold">Tipo vehículo</label>

            <select
              value={tipoVehiculo}
              onChange={(e) => setTipoVehiculo(e.target.value)}
              className="
                h-10
                sm:h-12
                rounded-lg
                border
                border-gray-300
                px-3
                text-sm
                bg-[#d9dde3]
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option value="">Seleccionar</option>
              <option value="moto">Moto</option>
              <option value="carro">Carro</option>
            </select>
          </div>
        </div>

        <div className="mt-2">
          <div onClick={handleRegister}>
            <AuthButton
              name="Crear Cuenta"
              color="bg-blue-600"
              hover="hover:bg-blue-700"
              textColor="text-white"
            />
          </div>
        </div>

        <p className="text-center mt-2 text-xs">
          ¿Ya tienes una cuenta?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer hover:underline font-semibold"
          >
            Iniciar sesión
          </span>
        </p>
      </div>
    </>
  );
};

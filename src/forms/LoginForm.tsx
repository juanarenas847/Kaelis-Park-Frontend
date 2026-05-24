import { AuthTitle } from '../AuthTitle';
import { AuthInput } from '../AuthInput';
import { AuthButton } from '../AuthButton';
import { Lock, Mail, UserRound } from 'lucide-react';
import GoogleIcon from '../../../assets/icons/logo-google.svg';
import { useNavigate } from 'react-router-dom';


export const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <>

            <div className="flex justify-center">
                <div className=" w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserRound size={35} className="text-blue-600" />
                </div>
            </div>

            <AuthTitle
                title='Bienvenido'
                desc='Inicia sesion para continuar'
            />

            <AuthInput
                text='Correo Electronico'
                type='email'
                placeholder='ejemplo123@gmail.com'
                icon={<Mail size={22} />}
            />

            <AuthInput
                text='Contraseña'
                type='password'
                placeholder='*********'
                icon={<Lock size={22} />}
            />

            <div className="flex justify-between items-center mb-3 text-sm">

                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Recordarme
                </label>

                <button
                    onClick={() => navigate('/forgot-password')}
                    className="text-blue-600 hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </button>

            </div>

            <AuthButton
                name='Iniciar Sesion'
                color='bg-blue-600'
                hover='hover:bg-blue-700'
                textColor='text-white'
            />

            <p className='flex justify-center my-2'>
                o
            </p>

            <AuthButton
                name='Continuar con Google'
                hover='hover:bg-gray-200'
                textColor='text-black'
                icon={
                    <img
                        src={GoogleIcon}
                        alt="Google"
                        className="w-5 h-5"
                    />
                }
            />

            <p className="text-center mt-4 text-sm">
                ¿No tienes una cuenta?{" "}

                <span
                    onClick={() => navigate('/register')}
                    className="text-blue-600 cursor-pointer"
                >
                    Regístrate aquí
                </span>
            </p>

        </>
    )
}
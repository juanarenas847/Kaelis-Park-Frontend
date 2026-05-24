import { AuthTitle } from '../AuthTitle';
import { AuthInput } from '../AuthInput';
import { AuthButton } from '../AuthButton';
import { ArrowBigLeft, CarFront, Lock, Mail, Plus, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RegisterFom = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute'>
                <div onClick={() => navigate('/')} className='w-15 h-10 rounded-2xl bg-blue-600 flex justify-center items-center cursor-pointer'>
                    <ArrowBigLeft size={22} className='text-white' />
                </div>
            </div>

            <AuthTitle title='Registro' />
            <div className='flex gap-2 '>
                <AuthInput text='Nombre' type='text' placeholder='Pascual' icon={<UserRound size={22} />} />
                <AuthInput text='Apellidos' type='text' placeholder='Bravo' icon={<UserRound size={22} />} />
            </div>

            <AuthInput text='Correo Electronico' type='email' placeholder='ejemplo@pascualbravo.edu.co' icon={<Mail size={22} />} />
            <AuthInput text='Tipo de usuario' type='text' placeholder='Estudiante' icon={<UserRound size={22} />} />
            <AuthInput text='Contraseña' type='password' placeholder='****************' icon={<Lock size={22} />} />

            <div className='flex justify-between items-center'>
                <AuthInput text='Placa Vehiculo' type='list' placeholder='XXX-XXX' icon={<CarFront size={22} />} />
                <div>
                    <p className=' text-center'>Añadir Placa</p>
                    <div className='w-30 h-15 rounded-2xl bg-blue-600 flex justify-center items-center cursor-pointer'>
                        <Plus size={22} className='text-white' />
                    </div>
                </div>
            </div>



            <AuthButton name='Crear Cuenta' color='bg-blue-600' hover='hover:bg-blue-700' textColor='text-white' />

            <p className="text-center mt-4 text-sm">
                ¿Ya tienes una cuenta?{" "}

                <span
                    onClick={() => navigate('/')}
                    className="text-blue-600 cursor-pointer"
                >
                    Iniciar Sesion
                </span>
            </p>

        </>
    )
}

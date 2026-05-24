import { AuthTitle } from '../AuthTitle';
import { AuthInput } from '../AuthInput';
import { AuthButton } from '../AuthButton';
import { ArrowBigLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    return (
        <>

            <div className=''>
                <div onClick={() => navigate('/')} className='w-15 h-10 rounded-2xl bg-blue-600 flex justify-center items-center cursor-pointer'>
                    <ArrowBigLeft size={22} className='text-white' />
                </div>
            </div>
            <AuthTitle title='Recuperacion' desc='Digita tu correro para enviarte un codigo de validacion' />
            <AuthInput text='Correo Electronico' type='email' placeholder='ejemplo123@gmail.com' icon={<Mail size={22} />} />

            <AuthButton name='Recuperar' color='bg-blue-600' hover='hover:bg-blue-700' textColor='text-white mt-9' />



        </>
    )
}
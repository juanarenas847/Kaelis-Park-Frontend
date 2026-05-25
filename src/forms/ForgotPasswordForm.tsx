import { AuthTitle } from '../components/auth/ui/AuthTitle';
import { AuthInput } from '../components/auth/ui/AuthInput';
import { AuthButton } from '../components/auth/ui/AuthButton';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');

    return (
        <>
            <AuthTitle 
                title='Recuperación' 
                desc='Digita tu correo para enviarte un código de validación' 
            />

            <AuthInput 
                text='Correo Electronico' 
                type='email' 
                placeholder='ejemplo123@gmail.com' 
                icon={<Mail size={20} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className='mt-6 sm:mt-9'>
                <AuthButton 
                    name='Recuperar' 
                    color='bg-blue-600' 
                    hover='hover:bg-blue-700' 
                    textColor='text-white' 
                />
            </div>
        </>
    );
};
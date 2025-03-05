import { useState } from 'react'

import { Card } from 'primereact/Card'
import { InputText } from 'primereact/InputText'
import { Password } from 'primereact/Password'
import { Button } from 'primereact/Button'
import api from '../services/api'
import { useAuth } from '../components/Context'

const Login = () => {

    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        login( username, password );
    }

    return (
        <div className='col-12'>
            <div className="flex align-items-center justify-content-center align-self-center align-content-center h-screen">
                <Card className="w-30rem p-4 shadow-3">
                    <h2 className="text-center mb-3">Iniciar Sesión</h2>
                    <div className="field mb-3">
                        <label htmlFor="username">Usuario</label>
                        <InputText 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full" 
                        />
                    </div>
                    <div className="field mb-4">
                        <label htmlFor="password">Contraseña</label>
                        <Password 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full" 
                            toggleMask 
                            feedback={false} 
                        />
                    </div>
                    <Button label="Ingresar" className="w-full" onClick={handleLogin} />
                </Card>
            </div>
        </div>
    )

}

export default Login;
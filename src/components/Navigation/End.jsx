import { useNavigate } from 'react-router-dom'

import { Avatar } from 'primereact/Avatar'
import { Button } from 'primereact/Button'
// import { Badge } from 'primereact/Badge'

import { useAuth } from '../Context'

const End = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();   

    return (
        <>
            <div className='flex align-items-center gap-2'>
                <Avatar 
                    icon='pi pi-user' 
                    size='large'
                    style={{ backgroundColor: '#2196F3', color: '#FFFFFF' }}
                    shape='circle'
                />
                <Button 
                    icon='pi pi-power-off' 
                    rounded text 
                    severity='help' 
                    size='small' 
                    aria-label='salir'
                    onClick={() => { logout(); navigate('/login') }} 
                />
            </div>
        </>
    )

}

export default End;
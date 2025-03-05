import { useNavigate } from 'react-router-dom';

import { Menubar } from 'primereact/menubar';

import Start from './Start';
import End from './End';

const Navigation = () => {

    const navigate = useNavigate();

    const navList = [
        { label: 'Banca', icon: 'pi pi-building-columns', command: () => { navigate('/banca') } },
        { label: 'Movs', icon: 'pi pi-chart-bar', command: () => { navigate('/trade') } },
    ]

    return (
        <div className='flex justify-content-center mt-4'>
            <Menubar 
                className='w-11'
                start={<Start />}
                model={navList}
                end={<End />}
            />
        </div>
    )    

}

export default Navigation;
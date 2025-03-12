import { Card } from "primereact/Card";

import { Button } from "primereact/Button";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
// import { Toast } from 'primereact/toast';

import { useForm } from "../hooks/useForm";
import { useRef, useState } from "react";
import api from "../services/api";
import { useAuth } from "../components/Context";

const Bank = () => {

    // const toast = useRef(null);

    const { user } = useAuth();

    const [id, setId] = useState(0);

    const [ Values, handleInputChange, Reset ] = useForm({ name: '', start: null, finish: null, amount: 0, active: true })

    const handleSubmit = async () => {

        const data = {...Values, usr: user.iduser}

        console.log( data );

        const response = await api.post('bank', data);

        if ( response.data.error ) {
            toast.current.show({severity: 'warn', summary: 'Advertencia', detail: response.data.msg, life: 3000});
            return;    
        }

        toast.current.show({severity: 'success', summary: 'Éxito', detail: response.data.msg, life: 3000});
        Reset();
    }

    return (
        <>
            <div className="flex justify-content-center">
                {/* <Toast ref={toast}/> */}
                <div className="p-4 col-6">
                    <Card
                        title={id !== 0 && id !== null ? 'Actualiza banca' : 'Nueva banca'}
                        className="p-fluid" 
                    >
                        
                        <div className="col-12" style={{ marginTop: '-1rem' }}>
                            <label> Nombre </label>
                            <InputText 
                                value={Values.name} 
                                onChange={(e) => handleInputChange(e.target.value, "name")} 
                            />
                        </div>

                        <div className="col-12">
                            <label>Día inicio</label>
                            <Calendar 
                                value={Values.start} 
                                onChange={(e) => handleInputChange(e.value, "start")} 
                                showIcon 
                                dateFormat="yy-mm-dd"
                            />
                        </div>

                        <div className="col-12">
                            <label> Día final </label>
                            <Calendar 
                                value={Values.finish} 
                                onChange={(e) => handleInputChange(e.value, "finish")} 
                                showIcon
                                dateFormat="yy-mm-dd"
                            />
                        </div>

                        <div className="col-12">
                            <label>Total</label>
                            <InputNumber 
                                value={Values.amount} 
                                onValueChange={(e) => handleInputChange(e.value, "amount")} 
                            />
                        </div>

                        <div className="flex align-items-center">
                            <Checkbox 
                                inputId="active" 
                                name="active" 
                                value="active" 
                                onChange={(e) => handleInputChange(e.value)} 
                                checked={Values.active} 
                            />
                            <label htmlFor="active" className="ml-2"> Activa </label>
                        </div>

                        <div>
                            <Button 
                                size='small'
                                label={ id !== 0 && id !== null ? 'Actualizar' : 'Guardar' }
                                onClick={ handleSubmit }
                            />
                        </div>

                    </Card>
                </div>
            </div>    
        </>
    )

}

export default Bank;
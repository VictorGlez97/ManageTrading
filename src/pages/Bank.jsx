import { Card } from "primereact/Card";

import { useForm } from "../hooks/useForm";

const Bank = () => {

    const [ Values, handleInputChange, Reset ] = useForm({ name: '', start: null, finish: null, amount: 0, active: true })

    return (
        <div className="flex justify-content-center">
            <div className="p-4 col-6">
                <Card
                    title={id !== 0 && id !== null ? 'Actualiza trade' : 'Nuevo trade'}
                    className="p-fluid" 
                >
                    <p> Bank </p>
                </Card>
            </div>
        </div>    
    )

}

export default Bank;
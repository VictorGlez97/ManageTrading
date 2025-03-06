import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from "primereact/InputText";
import { Button } from "primereact/Button";
import { useForm } from "../hooks/useForm";
import { Card } from "primereact/Card";
import api from "../services/api";
import { useAuth } from "../components/Context";

const Trade = () => {

    const { user } = useAuth();

    const [ id, setId ] = useState(0);

    const [ Values, handleInputChange, Reset ] = useForm({  mov: "", type: "", market: "", pe: 0, sl: 0, tp: 0, pips: 0, total: 0, dateIn: null, dateOut: null, bank: 0, comment: "", hour: "", }) 

    const [typeOptions, setTypeOptions] = useState(null);
    const [marketOptions, setMarketOptions] = useState(null);
    const [hourOptions, setHourOptions] = useState(null);
    const [bankOptions, setBankOptions] = useState(null);

    useEffect(() => { getBanks(); getTypes(); getMarkets(); getHours(); }, [])

    const getBanks = async () => {
        const resp = await api.get(`bank/user/${user.username}`)
        if ( resp.data.data ) {
            setBankOptions(resp.data.data);
        }
    }

    const getTypes = async () => {
        const resp = await api.get('dictionary/trade_type');
        if ( resp.data.data ) {
            setTypeOptions(resp.data.data);
        }
    }

    const getMarkets = async () => {
        const resp = await api.get('dictionary/trade_movs');
        if ( resp.data.data ) {
            setMarketOptions(resp.data.data);
        }
    }

    const getHours = async () => {
        const resp = await api.get('dictionary/trade_hour');
        if ( resp.data.data ) {
            setHourOptions(resp.data.data);
        }
    }

    const handleSubmit = async () => {
        
        console.log( Values );

        // const resp = await api.post('trade', Values);


    }

    const handleClean = () => {
        Reset();
    }

    return (
        <div className="flex justify-content-center">
            <div className="p-4 col-6">
                <Card 
                    title={id !== 0 && id !== null ? 'Actualiza trade' : 'Nuevo trade'}
                    className="p-fluid" 
                >
                    <div className="col-12" style={{ marginTop: '-1rem' }}>
                        <label>Movimiento</label>
                        <InputText 
                            value={Values.mov} 
                            onChange={(e) => handleInputChange(e.target.value, "mov")} 
                        />
                    </div>
                    
                    <div className="col-12">
                        <label>Tipo</label>
                        <Dropdown 
                            value={Values.type} 
                            options={typeOptions} 
                            onChange={(e) => handleInputChange(e.value, "type")} 
                            optionLabel="enumlabel"
                            optionValue="enumlabel"
                            placeholder="Seleccionar Tipo" 
                        />
                    </div>
                    
                    <div className="col-12">
                        <label>Mercado</label>
                        <Dropdown 
                            value={Values.market} 
                            options={marketOptions} 
                            onChange={(e) => handleInputChange(e.value, "market")} 
                            optionLabel="enumlabel"
                            optionValue="enumlabel"
                            placeholder="Seleccionar Mercado" 
                        />
                    </div>
                    
                    <div className="col-12">
                        <label>Hora</label>
                        <Dropdown 
                            value={Values.hour} 
                            options={hourOptions} 
                            onChange={(e) => handleInputChange(e.value, "hour")} 
                            optionLabel="enumlabel"
                            optionValue="enumlabel"
                            placeholder="Seleccionar Hora" 
                        />
                    </div>
                    
                    <div className="col-12">
                        <label>Entry (pe)</label>
                        <InputNumber 
                            value={Values.pe} 
                            onValueChange={(e) => handleInputChange(e.value, "pe")} 
                        />
                    </div>
                    
                    <div className="col-12">
                        <label>Stop lose (sl)</label>
                        <InputNumber 
                            value={Values.sl} 
                            onValueChange={(e) => handleInputChange(e.value, "sl")} 
                        />
                    </div>

                    <div className="col-12">
                        <label>Top profit (tp)</label>
                        <InputNumber 
                            value={Values.tp} 
                            onValueChange={(e) => handleInputChange(e.value, "tp")} 
                        />
                    </div>

                    <div className="col-12">
                        <label>Pips</label>
                        <InputNumber 
                            value={Values.pips} 
                            onValueChange={(e) => handleInputChange(e.value, "pips")} 
                        />
                    </div>

                    <div className="col-12">
                        <label>Total</label>
                        <InputNumber 
                            value={Values.total} 
                            onValueChange={(e) => handleInputChange(e.value, "total")} 
                        />
                    </div>

                    <div className="col-12">
                        <label>Banco</label>
                        <Dropdown 
                            value={Values.bank} 
                            options={bankOptions} 
                            onChange={(e) => handleInputChange(e.value, "bank")} 
                            optionLabel="name"
                            optionValue="idbank"
                            placeholder="Seleccionar Banca" 
                        />
                    </div>

                    <div className="col-12">
                        <label>Fecha Entrada</label>
                        <Calendar 
                            value={Values.dateIn} 
                            onChange={(e) => handleInputChange(e.value, "dateIn")} 
                            showIcon 
                            showTime
                            hourFormat="24"
                            dateFormat="yy-mm-dd"
                        />
                    </div>

                    <div className="col-12">
                        <label>Fecha Salida</label>
                        <Calendar 
                            value={Values.dateOut} 
                            onChange={(e) => handleInputChange(e.value, "dateOut")} 
                            showIcon 
                            showTime
                            hourFormat="24"
                            dateFormat="yy-mm-dd"
                        />
                    </div>
                    
                    <div className="col-12">
                        <label>Comentario</label>
                        <InputTextarea 
                            value={Values.comment} 
                            onChange={(e) => handleInputChange(e.target.value, "comment")} rows={4} 
                        />
                    </div>

                    <div className="col-12 flex justify-content-end">
                        <Button 
                            label={id !== 0 && id !== null ? 'Actualizar' : 'Guardar'} 
                            size="small"
                            onClick={ handleSubmit }
                        />
                    </div>
                </Card>
            </div>
        </div>
    )

}

export default Trade;
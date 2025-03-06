import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [Values, setValues] = useState( initialState );

    const Reset = () => {
        setValues( initialState );
    }

    const handleInputChange = (target, name) => {

        // console.log( target, name );

        setValues({
            ...Values,
            [ name ]: target
        });

    }

    return [ Values, handleInputChange, Reset ];

}
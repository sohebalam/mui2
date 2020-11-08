import React, { useState } from 'react'

const useForm = (initialfieldValues) => {
    const [values, setValues] = useState(initialfieldValues)

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    
    }
        return {
            values,
            setValues,
            handleInputChange
        }
        
}

export default useForm

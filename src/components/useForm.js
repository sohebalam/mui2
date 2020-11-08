import React, { useState } from 'react'

const useForm = (initialfieldValues, setCurrentId) => {
    const [values, setValues] = useState(initialfieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    
    }

    const resetForm = () => {
        setValues(initialfieldValues)
        setErrors({})
        setCurrentId(0)
    }
        return {
            values,
            setValues,
            errors,
            setErrors,
            handleInputChange,
            resetForm
        }
        
}

export default useForm

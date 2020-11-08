import { Button, Divider, FormControl, Grid, TextField, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import useForm from './useForm'


const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          
          
        },
      },
      form: {
          display: 'flex',
          flexwrap: 'wrap',
          justifyContent: 'center'
        

      },
      postBtn: {
          width: '50%'
      },
     
})

const initialfieldValues = {
    title: '',
    message: ''
}
const PostMessagesForm = ({classes, ...props}) => {
    const validate = () => {
        let temp = {...errors}
        temp.title = values.title?'':'this field is required'
        temp.message = values.message?'':'this field is required'
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x==='')
    }
 var{ 
     values,
 
     setValues,
     errors,
     setErrors,
     handleInputChange
    } 
    = useForm(initialfieldValues)
 
    const handleSubmit = e => {
        e.preventDefault()
        if(validate())
        window.alert('validate successfull')
    }


    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
        
        <TextField 
        name='title' 
        variant='outlined' 
        label='title' 
        fullWidth 
        value={values.title}
        onChange ={ handleInputChange}
        {...(errors.title && {error: true, helperText: errors.title})}
        />
        
   
         <TextField name='message' 
         variant='outlined' 
         label='message' 
         multiline rows={4} 
         fullWidth 
         value={values.message}
         onChange ={ handleInputChange}
         {...(errors.message && {error: true, helperText: errors.message})}
         />

         <Button variant='contained' color='primary' size='large' type='submit' className={classes.postBtn}>Submit</Button>
         </form>
    )
}

export default withStyles(styles)(PostMessagesForm)

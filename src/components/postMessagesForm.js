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
 var{ 
     values,
 
     setValues,

     handleInputChange
    } 
    = useForm(initialfieldValues)
 
    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
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
        />
        
   
         <TextField name='message' 
         variant='outlined' 
         label='message' 
         multiline rows={4} 
         fullWidth 
         value={values.message}
         onChange ={ handleInputChange}
         />

         <Button variant='contained' color='primary' size='large' type='submit' className={classes.postBtn}>Submit</Button>
         </form>
    )
}

export default withStyles(styles)(PostMessagesForm)

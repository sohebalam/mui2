import { Button, Divider, Grid, List, ListItem, ListItemText, Paper, Typography, withStyles } from '@material-ui/core'
import { set } from 'mongoose'
import React, { Fragment, useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/postMessage'
import PostMessagesForm from './postMessagesForm'
import ButtorToast, {Cinnamon} from 'butter-toast'
import { AssignmentTurnedIn, DeleteSweep } from '@material-ui/icons'

const styles = theme => ({
    paper: { 
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: { 
        textAlign: 'center'
    }

})


const PostMessages = ({classes, ...props}) => {
    // const [x, setX] = useState(0)
 const [currentId, setCurrentId] = useState(0)
    useEffect(() => {
       props.fetchAllPostMessages()
    }, [])

    const onDelete = id => {
        const onSuccess = () => {
            ButtorToast.raise({
                content: <Cinnamon.Crisp title ='Post Box'
                content ='Deleted Successfully'
                scheme = {Cinnamon.Crisp.SCHEME_PURPLE}
                icon={<DeleteSweep/>}/>
            })
            
        }
        
        if(window.confirm('Are you sure you want to delete the record?'))
        props.deletePostMessage(id, onSuccess)
    }


    return (
        <Grid container>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                    <PostMessagesForm {...{currentId, setCurrentId}}/>
                    
                    </Paper>
                    </Grid>
                
                <Grid item xs={7}>
                   <Paper className={classes.paper}> 
                   <List>
                     {  props.postMessageList.map((record, index) => {
                           return (
                           <Fragment key={index}>
                           <ListItem>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            {record.title}
                                        </Typography>
                                        
                                        
                                        <div>
                                        {record.message} 
                                        </div>
                                        <div className={classes.actionDiv}>
                                            <Button variant='contained' color='primary' size='small' className={classes.smMargin} onClick={()=>setCurrentId(record._id)}>Edit</Button>
                                            <Button variant='contained' color='secondary' size='small' className={classes.smMargin} onClick={()=> onDelete(record._id)}>Delete</Button>

                                        </div>
                                       
                                       
                                    </ListItemText>
                                    
                           </ListItem>

                           <Divider component="li"/>
                          
                           </Fragment>
                           
                           )
                       })}
                   </List>
                    </Paper>
                </Grid>
        </Grid>
    )


}





const mapStateToProps = state => ({ 
    postMessageList : state.postMessage.list
})



const mapActionToProps ={ 
    fetchAllPostMessages : actions.fetchAll,
    deletePostMessage : actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessages))

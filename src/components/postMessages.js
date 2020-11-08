import { Divider, Grid, List, ListItem, ListItemText, Paper, Typography, withStyles } from '@material-ui/core'
import { set } from 'mongoose'
import React, { Fragment, useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/postMessage'
import PostMessagesForm from './postMessagesForm'


const styles = theme => ({
    paper: { 
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    }
})


const PostMessages = ({classes, ...props}) => {
    // const [x, setX] = useState(0)
 

    useEffect(() => {
       props.fetchAllPostMessages()
    }, [])


    return (
        <Grid container>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                    <PostMessagesForm/>
                    
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
    fetchAllPostMessages : actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostMessages))

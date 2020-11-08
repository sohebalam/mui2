import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/postMessage'

const PostMessages = (props) => {
    const [x, setX] = useState(0)
 

    useEffect(() => {
       props.fetchAllPostMessages()
    }, [])


    return (
        <div>
           from postMessages
        </div>

    )


}





const mapStateToProps = state => ({ 
    postMessageList : state.postMessage.list
})



const mapActionToProps ={ 
    fetchAllPostMessages : actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)( PostMessages)

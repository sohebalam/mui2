const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var {PostMessage} = require('../models/postmessage')

router.get('/', (req,res) => {
    PostMessage.find((err, docs) => {
        if(!err) res.send(docs)
        else console.log('error while retrieving reocrds:' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req,res)=> {
    var newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })
    newRecord.save((err, docs) => {
        if(!err) res.send(docs)
        else console.log('error while creating new records:' + JSON.stringify(err, undefined, 2))
    })
})
router.put('/:id', (req,res)=> {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('No record with given id:' + req.params.id )
    var updatedRecord ={
        title: req.body.title,
        message: req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id, {$set:updatedRecord}, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('error while updating records:' + JSON.stringify(err, undefined, 2))
    })

    })




router.delete('/:id', (req,res)=> {
        if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id:' + req.params.id )
       PostMessage.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('error while deleting records:' + JSON.stringify(err, undefined, 2))
    })

})

module.exports = router
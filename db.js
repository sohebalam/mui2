const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}, { useUnifiedTopology: true}, {useFindAndModify: false},
err => {
    if(!err) 
    console.log('DB connected')
    else
    console.log('connection error :' + JSON.stringify(err, undefined, 2))
})


   
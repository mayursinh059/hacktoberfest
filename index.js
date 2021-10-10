const express = require('express')
const app = express()
const genreRouter = require('./routes/genres')
const mongo = require('mongoose')
const { boolean } = require('joi')

mongo.connect("mongodb://localhost:27018/playground",{ useNewUrlParser: true, useUnifiedTopology: true  })
    .then(()=>console.log('connected to mongodb...'))
    .catch(err=>(console.error('could not connect to mongodb :( ...')))

app.use(express.json())
app.use('/api/genres',genreRouter)

const genreSchema = new mongo.Schema({
    name : String,
    company : String,
    genres : [String],
    date : {type: Date, default:Date.now},
    isPublished : Boolean
})
const Genre = mongo.model('Genre',genreSchema)

async function createGenre(){
    const genreObject = new Genre({
        name : "Kung Fu Panda",
        company : "Dreamworks",
        genres : ["Adventure","Animation"],
        isPublished : true
    })    
    const result = await genreObject.save()
    console.log(result)
}

createGenre()



const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}...`))
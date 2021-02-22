const mongoose = require('mongoose')

const url = `mongodb+srv://shamu:zCS6H8h1YDbhoRwb@cluster0.hzxmp.mongodb.net/recetas_supremas?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
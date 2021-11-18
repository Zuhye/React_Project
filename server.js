const express = require('express')
const bodyPareser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended: true}));

app.get('/api/hello',(req, res)=> {
    res.send({message: "Hello Express!"});
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));

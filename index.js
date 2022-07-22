const express = require('express')
const app = express()

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/',(request,response)=>{
    response.render("index")
})

app.listen(80, () => {
    console.log('Servidor rodando')
})
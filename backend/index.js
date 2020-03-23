const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.json({mess:"Hello World!"});
})

app.listen(3333);

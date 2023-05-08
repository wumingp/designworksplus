const express = require('express');

const app = express();
const path = require('path');
app.use(express.static('/public',path.join(__dirname,'public')));

app.listen(80,()=>{
    console.log('服务启动成功')
})

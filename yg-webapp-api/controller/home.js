var express = require('express');
var app = express();

//解决跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已经启动，地址是http://localhost:8000')
})
app.get('/', function (req, res) {
    res.send('这里是首页')
})
app.get('/goods', function (req, res) {
    res.json(data) // 返回json
})
var data = {
    code: 200,
    msg: 'ok',
    data: {
        a: 1,
        b: 2
    }
}

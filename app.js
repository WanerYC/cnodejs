// 程序入口
var express = require('express')
var router = require('./router')

var app = express()

// 统一静态资源管理  (开放权限)
app.use('./public', express.static('./public'))
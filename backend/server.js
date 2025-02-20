// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config();

// 初始化应用
const app = express();

// 启用 CORS
app.use(cors());

// 设置路由
app.get('/', (req, res) => {
    res.send('Hello, this is the backend!');
});

// 设置端口
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

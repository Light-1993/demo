const express = require('express');
const morgan = require('morgan');  // Nhúng thư viện morgan
const app = express();
const port = 3000;

app.use(morgan('dev'));  // middleware để ghi log

app.get('/', (req, res) => {
  res.send('Trang chủ');
});

app.get('/light', (req, res) => {
  res.send('Yagami Dark');
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});

const express = require('express')
const bodyPareser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended: true}));

app.get('/api/customers',(req, res)=> {
    res.send([{
        'id': 1,
        'image': "https://placeimg.com/64/64/any",
        'name' : '이순신',
        'birthday' : '000216',
        'gender': '여자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': "https://placeimg.com/64/64/any/1",
        'name' : '홍길동',
        'birthday' : '000216',
        'gender': '여자',
        'job': '프로그래머'
      },
      {
        'id': 3,
        'image': "https://placeimg.com/64/64/any/2",
        'name' : '송주혜',
        'birthday' : '000216',
        'gender': '여자',
        'job': '디자이너'
      }
    ]);
});
app.listen(port, ()=> console.log(`Listening on port ${port}`));

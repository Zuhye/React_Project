import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer';

const customers =[{
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
  'job': '대학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=> {
            return (
              <Customer
                key={c.id}
                id = {c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );  
  }
}

export default App;

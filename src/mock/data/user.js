import Mock from 'mockjs'
import avatar from './../../assets/user.jpg'
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: avatar,
    name: '张星'
  }
]

const Users = []

for (let i = 0; i < 186; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export { LoginUsers, Users }

import React from 'react'
import UserList from '../../Components/UserList/UserList'
import { userData } from '../../Utils/UserData'
import './User.scss'


const User = () => {
  return (
    <div className='User-Wrapper'>
      <h2>Users</h2>
      <div className='User'>
        {userData.map((item) => {
          return <UserList {...item} key={item.id}/>
        })}
      </div>
      <div></div>
    </div>

  )
}

export default User
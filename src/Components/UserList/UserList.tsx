import React from 'react'
import './UserList.scss'

interface userList {
    name: string,
    img: string,
    num: string,
}

const UserList: React.FC <userList>= ({name, img, num}) => {
  return (
    <div className='UserList'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h3>{num}</h3>
    </div>
  )
}

export default UserList
import React, {FC} from 'react'
import './SidebarList.scss'

interface prop {
    name: string
    icon: string
}

const SidebarList:FC<prop> = ({icon, name}) => {
  return (
    <div className='SidebarList'>
        <img src={icon} alt="" />
        <h5>{name}</h5>
    </div>
  )
}

export default SidebarList
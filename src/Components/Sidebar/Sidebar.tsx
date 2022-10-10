import './Sidebar.scss'
import DropDown from '../../Assests/Images/DropDown.svg'
import Org from '../../Assests/Images/Org.svg'
import Dashboard from '../../Assests/Images/Dashboard.svg'
import { customer, business, setting } from '../../Utils/StaticData'
import SidebarList from '../SidebarList/SidebarList'


const Sidebar = () => {
  return (
    <div>
        <div className='Switch-Org'>
            <img src={Org} alt="" />
            <h4>Switch Organisation </h4>
            <img src={DropDown} alt="" />
        </div>

        <div className='Switch-Org'>
            <img src={Dashboard} alt="" />
            <h4>Dashboard</h4>
        </div>

        <div>
            <h4>customers</h4>
            <div className='SidePadding'>
              {customer.map((item, index) =>{
                return <SidebarList {...item} key={index}/>
              })}
            </div>
        </div>

        <div>
            <h5>Businesses</h5>
            <div>
              {business.map((item, index) =>{
                return <SidebarList {...item} key={index}/>
              })}
            </div>
        </div>

        <div>
            <h5>Settings</h5>
            <div>
              {setting.map((item, index) =>{
                return <SidebarList {...item} key={index}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
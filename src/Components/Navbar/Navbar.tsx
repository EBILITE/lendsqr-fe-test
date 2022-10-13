import React from 'react'
import './Navbar.scss'
import NavLogo from '../../Assests/Images/LendSqrLogo.svg'
import {AiOutlineBell} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import Ava from '../../Assests/Images/myPics.jpg'
import {MdArrowDropDown} from 'react-icons/md'

interface navbar{
    Avatar: string
    firstName: string
    lastName: string
}

const Navbar: React.FC<navbar> = () => {
  return (
    <div className='Navbar-Wrapper'>
        <div className='Navbar-Container'>

            {/* =======Left Navbar ======================= */}
            <div className='Left-Navbar'>

                <div className='Nav-Img'>
                    <img src={NavLogo} alt="Navlogo" />
                </div>

                <div className='Search-Container'>
                    <input placeholder='Search for anything'/> 
                    <span><FiSearch /></span>  
                </div>
            </div>

            {/* ===============Right NavBar ============ */}
            <div className='Right-Navbar'>
                <h4>Docs</h4>
                <span> <AiOutlineBell/></span>
                <div className='Avatar-Container'>
                    <div className='Avatar'>
                        <img src={Ava} alt="" />
                     </div>

                    <h4>Ebilite</h4>

                    <div className='DropDown'>
                        <MdArrowDropDown/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
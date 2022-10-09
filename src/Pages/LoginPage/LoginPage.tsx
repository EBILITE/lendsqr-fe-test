import React from 'react'
import './LoginPage.scss';
import LogoImage from  '../../Assests/Images/LendSqrLogo.svg';
import HeroImage from  '../../Assests/Images/LandingPageImage.svg';

const LoginPage = () => {
  return (
    <div className='LoginWrapper'>
      <div className='LoginContainer'>

        {/*    Left Side */}
        <div className='Left-Wrapper'>
          {/* <img src={LogoImage} alt='logo'/> */}
          <img src={HeroImage} alt='Hero'/>
        </div>


        {/*  Right Side */}
        <div className='Right-Wrapper'><h1>Right</h1></div>
      </div>
      
    </div>
  )
}

export default LoginPage
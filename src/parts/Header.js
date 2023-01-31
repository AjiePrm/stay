import React from 'react'
import Button from 'Elements/Button'
import BrandIcon from 'parts/IconText'
import UserLogin from 'assets/image/icon/iconUser.svg'
import Notification from 'assets/image/icon/iconNotif.svg'
import {useLocation} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default function Header(props) {
  const GetNavLinkClass = (path) => {
    const location = useLocation()
    return location.pathname ? " active" : "";
  };
  return (
   <Fade>
      <header className="spacing-sm mt-3">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
              <li className={`nav-item${GetNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className='nav-item'>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className='nav-item'>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className='nav-item'>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
                <li className='nav-item' style={{marginTop:-6, marginLeft:20, marginRight:-15}}>
                  <Button className='nav-link' type='link' href='/notification'>
                    <img width='43px' height='41px' src={Notification} alt='notif'/>
                  </Button>
                </li>
                <li className='nav-item'>
                  <Button className='nav-link' type='link' href='/login'>
                    <img width='34px' height='32px' src={UserLogin} alt='login or register'/>
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
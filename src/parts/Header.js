import React from 'react'
import Button from 'Elements/Button'
import BrandIcon from 'parts/IconText'
import {useLocation} from 'react-router-dom'

export default function Header(props) {
  const GetNavLinkClass = (path) => {
    const location = useLocation()
    return location.pathname ? " active" : "";
  };
  return (
   
      <header className="spacing-sm">
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
              </ul>
            </div>
          </nav>
        </div>
      </header>
   
  );
}
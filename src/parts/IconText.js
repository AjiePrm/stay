import React from 'react'
import Button from 'Elements/Button'
import Logo from 'assets/image/icon/logo.svg'

export default function IconText() {
  return (
    <div>
      <Button className="brand-text-icon" href="" type="link">
        <img width='34' height='35' src={Logo} alt='plane logo' style={{marginRight:5, marginTop:-20}}/>Stay<span className="text-gray-900">di-sini</span>
      </Button>
    </div>
  );
}

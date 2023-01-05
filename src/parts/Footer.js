import React from 'react'
import Button from 'Elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-auto' style={{width:300, marginRight:120}}>
                    <IconText/> 
                    <p className='brand-tagline'> We kaboom your beauty holiday instanly and memorable</p>
                </div>
                    <div className='col-2 mr-3 ml-4'>
                        <h6 className='mt-2'>For Beginners</h6>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <Button type='link' href='/register'>New Account</Button>
                            </li>
                            <li className='list-group-item'>
                                <Button type='link' href='/properties'>Start Booking Room</Button>
                            </li>
                            <li className='list-group-item'>
                                <Button type='link' href='/payment'>Use Payment</Button>
                            </li>
                        </ul>
                </div>
                <div className='col-2 mr-2'>
                    <h6 className='mt-2'>Explore Us</h6>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <Button type='link' href='/careers'>Our Careers</Button>
                            </li>
                            <li className='list-group-item'>
                                <Button type='link' href='/privacy'>Privacy</Button>
                            </li>
                            <li className='list-group-item'>
                                <Button type='link' href='/terms'>Term & Condition</Button>
                            </li>
                        </ul>
                </div>
                <div className='col-3'>
                    <h6 className='mt-2'>Connetc Me</h6>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <Button isExternal type='link' href='mailto:ajiee.salahudin@gmail.com'>ajiee.salahudin@gmail.com</Button>
                            </li>
                            <li className='list-group-item'>
                                <Button isExternal type='link' href='https://www.linkedin.com/in/ajieprima0/'>linkedin</Button>
                            </li>
                            <li className='list-group-item'>
                                <span>Sumatera Selatan, Palembang</span>
                            </li>
                        </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center copyrights'>
                    DummyProject 2022 · All rights reserved · Staydi-sini
                 </div>
            </div>
        </div>
    </footer>
  )
}

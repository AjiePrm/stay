import React from 'react'
import Fade from 'react-reveal/Slide'
import ImgHero from 'assets/image/img-hero.jpg'
import ImgHeroFrame from 'assets/image/img-hero-frame.png'
import IconCitis from 'assets/image/icon/icon-citis.svg'
import IconTraveler from 'assets/image/icon/icon-traveler.svg'
import IconTreasuer from 'assets/image/icon/icon-treasure.svg'

import Button from 'Elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

  function showMostPicked(){
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop -30,
      behavior: 'smooth',
    })
  }
  return (
    <Fade>
    <section className='container pt-4'>
      <div className='row aligh-items-center'>
        <div className='col-auto pr-5' style={{width: 559, marginTop:-30}}>
          <h1 className='font-weight-light line-height-1 mb-3'>Forget the busy work, <br/> 
            and <span className='font-weight-normal'>start</span> next <span className='font-weight-normal'>vacation</span>
          </h1>
          <p className='mb-5 font-weight-light text-gray-500 w-105'>
            We provide what you need to enjoy your holiday with family. 
            Time to make another memorable moments
          </p>
          <Button className='btn px-5 text-white' hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now 
          </Button>
          
          <div className='row' style={{marginTop: 60}}>
            <div className='col-auto' style={{marginRight: 35}}>
              <img width='36' height='36' src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
              <h6 className='mt-3'>
                {formatNumber(props.data.travelers)}{' '}
                <span className='text-gray-500 font-weight-light' >
                  travelers
                </span>
              </h6>
            </div>
            <div className='col-auto' style={{marginRight: 60}}>
              <img width='36' height='36' src={IconCitis} alt={`${props.data.cities} Cities`} />
              <h6 className='mt-3'>
                {formatNumber(props.data.cities)}{' '}
                <span className='text-gray-500 font-weight-light' >
                  cities
                </span>
              </h6>
            </div>
            <div className='col-auto'>
              <img width='32' height='31' src={IconTreasuer} alt={`${props.data.treasures} Treasure`} />
              <h6 className='mt-3'>
                {formatNumber(props.data.treasures)}{' '}
                <span className='text-gray-500 font-weight-light' >
                  treasure
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className='col-6 pl-3'>
          <div>
            <img src={ImgHero} 
            alt='Room with couches' 
            className='img-fluid position-absolute' 
            style={{margin: '-30px 0 0 -30px', zIndex: 1 , width:517, height:419}}
            />
            <img src={ImgHeroFrame} 
            alt='Room with couches frame' 
            className='img-fluid position-absolute' 
            style={{margin: '55px 0 0 0', width:521, height:365}}/>      
          </div>
        </div>
      </div>
    </section>
    </Fade>
  )
}

import React, { Component } from 'react'
import Header from '../parts/Header'

import Hero from 'parts/Hero.js'
import landingPage from 'json/landingPage.json'
import MostPicked from 'parts/MostPicker'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

class LandingPage extends Component {
  
  constructor(props){
    super(props)
    this.refMostPicked = React.createRef()
  }

  render() {
    return (
      <React.Fragment>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}/>
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}/>
        <Categories data={landingPage.categories}/>
        <Testimony data={landingPage.testimonial}/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default (LandingPage)

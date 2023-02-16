import React, { Component } from "react";
import Header from 'parts/Header'
import FeaturedImage from '../parts/FeaturedImage'
import PageTitle from '../parts/PageDetailTitle'
import ItemDetails from '../json/itemDetails.json'

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title ="Details Page"
    window.scrollTo(0, 0)
  }


  render() {
    const breadcrumb = [
      {pageTitle: "Home", pageHref: ""},
      {pageTitle: "House Details" , pageHref:""}
    ]
    return <>
    <Header {...this.props}></Header>
    <PageTitle breadcrumb={breadcrumb} data={ItemDetails}></PageTitle>
    <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
    </>;
  }
}

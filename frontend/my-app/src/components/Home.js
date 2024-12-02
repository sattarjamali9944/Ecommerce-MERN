import React from 'react'
import BannerSlider from './BannerSlider'
import ShopWithUs from './ShopWithUs'
import VideoSection from './VideoSection'
import ContentPhotoSection from './ContentPhotoSection'
import EcommerceSection from './EcommerceSection'
import PostGridsSection from './PostGridsSection'
import SubscriptionSection from './SubscriptionsSection'
import Footer from './Footer'

function Home() {
  return (
    <>
      <BannerSlider/>
      <ShopWithUs/>
      <ContentPhotoSection/>
      <VideoSection/>
      <EcommerceSection/>
      <PostGridsSection/>
      <SubscriptionSection/>
      <Footer/>
    </>
  )
}

export default Home
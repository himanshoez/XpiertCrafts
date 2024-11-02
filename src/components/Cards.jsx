import React from 'react'
import Card from './Card'
import Footer from './Footer'

import Seo from '../assets/icons/onPageSEO.svg'
import contentWriting from '../assets/icons/offPageSEO.svg'
import franchiseSEO from '../assets/icons/linkBuilding.svg'
import localSEO from '../assets/icons/localSEO.svg'
import socialMediaMarketing from '../assets/icons/contentCreation.svg'
import searchOptimization from '../assets/icons/productPlanning.svg'

const Cards = () => {
  return (
    <>
    <div className="cards grid md:flex grid-cols-1 md:flex-wrap md:justify-center md:my-8 gap-5 md:w-3/4 m-auto">
    <Card link="/services/seo" src={Seo} heading="Website Audit" desc="A meticulous evaluation of your website’s essential components to ensure optimal functionality, with corrective actions taken as necessary. In essence, elevate your website’s appeal to search engines." /> 

    <Card link="/services/franchise-seo" src={franchiseSEO} heading="Competitor Analysis" desc="Understanding your competition is as crucial as achieving your own goals. Ideally, you’d prefer to steer clear of direct confrontations. Our thorough competitor analysis aims to map out a secure and strategic path for you." /> 

    <Card link="/services/local-seo" src={localSEO} heading="Keyword R&A" desc="Comprehensive Keyword Research and Analysis form the cornerstone of successful SEO. Ultimately, everything converges on this foundation. Our team of experts will equip you with a suite of highly effective and valuable keywords to commence your journey." /> 

    <Card link="/services/social-media-marketing" src={socialMediaMarketing} heading="Content Creation" desc="Exceptional content can propel your website to new heights, reaching destinations you once deemed unattainable. Our team of skilled wordsmith’s crafts compelling narratives that resonate with your audience, delivering precisely what they seek." /> 

    <Card link="/services/search-optimization" src={searchOptimization} heading="Link Building" desc="High-quality backlinks are a pivotal element of effective SEO, significantly enhancing your site’s desirability to search engines in just a few days. Our team of dedicated link experts will ensure this transformation for you." /> 

    <Card link="/services/content-writing" src={contentWriting} heading="Local SEO Optimization" desc="The journey to prominence often starts locally. One of the most overlooked and underutilized aspects of effective SEO is Local SEO Optimization. Our team of experts will empower you to dominate local markets, preparing you to conquer the global stage." /> 
    </div>

</>
  )
}

export default Cards

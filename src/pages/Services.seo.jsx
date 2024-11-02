import React from 'react'
import { Helmet } from 'react-helmet'
import seoPage from '../assets/images/seoPage.png'

const Seo = () => {
  return (
  <>
  <div>
  <Helmet>
      <title>XpiertCrafts - Premier SEO Services | Elevate Your Online Presence & Drive Growth</title>
      <meta name="description" content="Unlock top search engine rankings with our elite SEO services. Our expert team delivers tailored strategies, advanced techniques, and comprehensive analytics to boost your online visibility, attract quality traffic, and maximize ROI. Discover unparalleled success today!"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
  </div>

  <header className='md:min-h-[50%] min-h-[20vh] px-auto bg-[#e8f1fe] p-10 flex justify-center items-center' >
    <section className="headerContent">
      <div className="text"></div>
      <h1 className='text-xl md:text-5xl p-5 w-1/2'>Elevate Your Digital Presence with Premier SEO Services</h1>
      <p className='text-justify text-md md:text-lg p-5 opacity-95 md:w-1/2 text-[#1c2a43]' >In today’s competitive digital landscape, superior SEO is essential for ensuring your website stands out and performs exceptionally. At XpiertCrafts, we deliver elite SEO services meticulously designed to amplify your online presence, attract high-quality traffic, and maximize your return on investment. Our team of seasoned experts harnesses cutting-edge techniques and sophisticated strategies to achieve unparalleled results and propel your website to the pinnacle of search engine rankings.</p>
    <div className="img">
      <img src={seoPage} alt="headerImage" width='350px' />
    </div>
    </section>
    </header>
  </>
  )
}

export default Seo
